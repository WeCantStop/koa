const Router = require('koa-router');
const indexRouter = new Router();

indexRouter.get('/', async(ctx, next) => {
    await ctx.render('index', {
        test: '测试title',
        test2: '我是测试2'
    })
})

indexRouter.get('/activity', (ctx, next) => {
    ctx.body = '活动页';
})

module.exports = indexRouter;