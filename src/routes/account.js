const Router = require('koa-router');
const router = new Router();

router.get('/', async(ctx, next) => {
    ctx.body = '用户中心';
})

router.get('/login', (ctx, next) => {
    ctx.body = {
        code: 0,
        message: '用户登录'
    };
})

module.exports = router;