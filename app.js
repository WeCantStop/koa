const Koa = require('koa');
const app = new Koa();

const port = 3001;

// 此处开始堆叠各种中间件
//...

app.use(ctx => {
    ctx.body = 'First Koa';
})

app.listen(port, function(){
    console.log('Success,listen in port ' + port);
});