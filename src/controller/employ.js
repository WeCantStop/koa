const { successBody, errorBody } = require('../utils/resTemplate');
const { parseQueryData } = require('../utils/pagnition');
const { checkReqBody } = require('../utils/reqValidate');
const { EmployModel } =  require('../models/employ');
const { SalaryModel } =  require('../models/salary');
const { EmployTitleModel } =  require('../models/employTitle');
const { DepartEmpModel } =  require('../models/depart_emp');
const { DepartmentModel } =  require('../models/department');
const moment = require('moment');

class EmployController {
  // 分页查询员工列表
  async queryList(ctx, next) {
    let { pageSize, pageNo, firstName, lastName } = ctx.request.query;
    const limit = Number(pageSize);
    const offset = Number((pageNo - 1) * pageSize);
    const queryParams = {};
    if (!!firstName) {
      queryParams.firstName = firstName;
    }
    if (!!lastName) {
      queryParams.lastName = lastName;
    }
    
    try {
      const res = await EmployModel.findAndCountAll({ offset, limit,
        where: queryParams
      });
      const { count, rows } = JSON.parse(JSON.stringify(res));

      for (const item of rows) {
        const salaries = await SalaryModel.findAll({
          attributes: ['salary', 'fromDate', 'toDate'],
          where: { empNo: item.empNo }
        });

        const employTitle = await EmployTitleModel.findAll({
          attributes: ['title', 'fromDate', 'toDate'],
          where: { empNo: item.empNo }
        })

        const deptNo = await DepartEmpModel.findAll({
          attributes: ['deptNo'],
          where: {
            empNo: item.empNo
          }
        })

        if (deptNo[0]) {
          const deptName = await DepartmentModel.findAll({
            attributes: ['deptName'],
            where: {
              deptNo: deptNo[0].dataValues.deptNo
            }
          })
          item.department = deptName[0].dataValues.deptName;
        } else {
          item.department = null;
        }

        if (salaries.length) {
          item.salary = salaries[salaries.length - 1].salary;
        }

        if (employTitle.length) {
          item.title = employTitle[employTitle.length - 1].title;
        }
      }
    
      const responseData = {
        pageNo: Number(pageNo),
        pageSize: Number(pageSize),
        total: count,
        list: rows
      }
      ctx.body = successBody(responseData);
    } catch (err) {
      console.log(err)
      ctx.body = errorBody(err)
    }
  }

  // 新增员工
  async create(ctx, next) {
    const { birthDate, firstName, lastName, gender } = ctx.request.body;
    const maxEmpNo = await EmployModel.max('empNo');
    const hireDate = moment().format('YYYY-MM-DD');
    try {
      await EmployModel.create({
        empNo: maxEmpNo + 1,
        firstName,
        lastName,
        birthDate,
        hireDate,
        gender,
      })
      ctx.body = successBody();
    } catch(err) {
      ctx.body = errorBody(err)
    }
  }

  async edit(ctx) {
    const data = ctx.request.body;
    const updateData = {};
    for (const key in data) {
      if (data[key]) {
        updateData[key] = data[key];
      }
    }
    if (!updateData.empNo) {
      ctx.body = errorBody('empNo can not be null')
    } else {
      try {
        await EmployModel.update(updateData, {
          where: {
            empNo: updateData.empNo
          }
        });
        ctx.body = successBody();
      } catch(err) {
        ctx.body = errorBody();
      }
    }
  }
}

module.exports = new EmployController();