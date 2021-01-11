const Router = require('koa-router');
const router = new Router();
const StudentController = require('../controller/student');

router.get('/queryList', StudentController.queryList);
router.post('/create', StudentController.create);

module.exports = router;
