const Router = require('koa-router');
const accountRouter = new Router();

accountRouter.prefix('/account')

accountRouter.get('/', async(ctx, next) => {
    ctx.body = '用户中心';
})

accountRouter.get('/login', (ctx, next) => {
    ctx.body = '用户登录';
})

module.exports = accountRouter;