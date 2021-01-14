const Router = require('koa-router');
const router = new Router();
const EmployController = require('../controller/employ');

router.get('/queryList', EmployController.queryList);
router.post('/create', EmployController.create);
router.post('/edit', EmployController.edit);

module.exports = router;
