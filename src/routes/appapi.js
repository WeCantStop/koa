const Router = require('koa-router');
const router = new Router();
const gradeRouter = require('./grade');
const studentRouter = require('./student');
const employRouter = require('./employ');
const departmentRouter = require('./department');

router.use('/grade', gradeRouter.routes());
router.use('/student', studentRouter.routes());
router.use('/employ', employRouter.routes());
router.use('/department', departmentRouter.routes());

module.exports = router;
