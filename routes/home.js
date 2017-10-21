const Router = require('koa-router');
const router = new Router();

router.get('/', async(ctx, next) => {
    await ctx.render('index', {
        test: '测试title',
        test2: '我是测试2'
    })
})

module.exports = router;