const { successBody, errorBody } = require('../utils/resTemplate');
const { checkReqBody } = require('../utils/reqValidate');
const { DepartmentModel} =  require('../models/department');

class DepartmentController {

  constructor() {};

  async queryList(ctx, next) {
    const list = await DepartmentModel.findAll();
  
    ctx.body = successBody(list);
  }
}

module.exports = new DepartmentController();