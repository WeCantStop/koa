const Router = require('koa-router');
const router = new Router();
const DepartmentController = require('../controller/department');

router.get('/queryList', DepartmentController.queryList);

module.exports = router;
