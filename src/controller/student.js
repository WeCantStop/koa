const { successBody, errorBody } = require('../utils/resTemplate');
const { checkReqBody } = require('../utils/reqValidate');
const { StudentModel } =  require('../models/student');

class StudentController {

  async queryList(ctx, next) {
    const studentList = await StudentModel.findAll({
      attributes: ['name', 'studentId', 'classId', 'gender', 'createDate', 'graduation', 'graduationDate'],
      where: { deleteFlag: 0 }
    });
    ctx.body = successBody(studentList);
  }

  async create(ctx) {
    try {
      const insertData = {
        ...ctx.request.body,
        deleteFlag: 0,
        classId: 100,
        createDate: '2010-07-30 00:00:00',
      };
      await StudentModel.create(insertData);
      ctx.body = successBody();
    } catch(err) {
      ctx.body = errorBody(err.errors[0].message);
    }
  }
}

module.exports = new StudentController();