const Router = require('koa-router');
const indexRouter = new Router();

indexRouter.get('/', async(ctx, next) => {
    ctx.body = '首页';
})

indexRouter.get('/activity', (ctx, next) => {
    ctx.body = '活动页';
})

module.exports = indexRouter;