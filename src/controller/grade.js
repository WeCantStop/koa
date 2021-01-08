const { successBody, errorBody } = require('../utils/resTemplate');
const { checkReqBody } = require('../utils/reqValidate');
const { GradeModel } =  require('../models/grade');

class GradeController {

  constructor() {};

  async queryList(ctx, next) {
    const gradeList = await GradeModel.findAll({
      attributes: ['name', 'leader'],
      where: { deleteFlag: 0 }
    });
  
    ctx.body = successBody(gradeList);
  }
}

module.exports = new GradeController();