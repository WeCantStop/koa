const Router = require('koa-router');
const router = new Router();
const GradeController = require('../controller/grade');

router.get('/queryList', GradeController.queryList);

module.exports = router;
