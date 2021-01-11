const Router = require('koa-router');
const router = new Router();
const gradeRouter = require('./grade');
const studentRouter = require('./student');

router.use('/grade', gradeRouter.routes());
router.use('/student', studentRouter.routes());

module.exports = router;
