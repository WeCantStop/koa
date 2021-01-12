const { successBody, errorBody } = require('../utils/resTemplate');
const { parseQueryData } = require('../utils/pagnition');
const { checkReqBody } = require('../utils/reqValidate');
const { EmployModel } =  require('../models/employ');
const { SalaryModel } =  require('../models/salary');
const { EmployTitleModel } =  require('../models/employTitle');
const { DepartEmpModel } =  require('../models/depart_emp');
const { DepartmentModel } =  require('../models/department');

class EmployController {
  async queryList(ctx, next) {
    let { pageSize, pageNo } = ctx.request.query;
    const limit = Number(pageSize);
    const offset = Number((pageNo - 1) * pageSize);
    
    try {
      const res = await EmployModel.findAndCountAll({ offset, limit,
        where: {}
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

        const deptName = await DepartmentModel.findAll({
          attributes: ['deptName'],
          where: {
            deptNo: deptNo[0].dataValues.deptNo
          }
        })

        item.salaries = salaries;
        item.titles = employTitle;
        item.department = deptName[0].dataValues.deptName;
      }
    
      const responseData = {
        pageNo: Number(pageNo),
        pageSize: Number(pageSize),
        total: count,
        data: rows
      }
      ctx.body = successBody(responseData);
    } catch (err) {
      console.log(err)
      ctx.body = errorBody(err)
    }
  }
}

module.exports = new EmployController();