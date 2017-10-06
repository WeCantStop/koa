const Router = require('koa-router');
const fs = require('fs');
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

indexRouter.get('/readFile', async(ctx, next) => {
    console.log('start readFile');
    await fs.readFile('./test-dir/test.json', 'utf-8', (err, res) => {
        if (err) {
            console.log(err);
        }
        console.log(res);
        ctx.body = JSON.stringify(res);        
        console.log('end readFile');        
    })
})

module.exports = indexRouter;