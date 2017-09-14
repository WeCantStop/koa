const Koa = require('koa');
// 使用generate中间件时候需要使用koa-convert封装一下
const convert = require('koa-convert');
// 路由中间件
const Router = require('koa-router');
// 中间间
const loggerGenerator = require('./middlewear/logger');
// 引入路由中间件
const indexRouter = require('./routes/index');
const accountRouter = require('./routes/account');

const app = new Koa();
app.name = 'KoaDemo';
const port = 3001;

// 此处开始堆叠各种中间件
//...

/** ctx 上下文，method 为请求方式,url 为请求地址 **/

/** logger 中间件 **/
// app.use((ctx, next) => {
//     const startTime = new Date();
//     return next().then(() => {
//         const ms = new Date() - startTime;
//         console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
//     })
// });

// 巧借用 async 实现中间件的架构
// 遇到 next() 关键字时，会调用下游中间件
// x-response-time
// app.use(async function (ctx, next) {
//     const start = new Date();
//     await next();
//     const ms = new Date() - start;
//     ctx.set('X-Response-Time', `${ms}ms`);
// });

// logger 中间件
// app.use(async function (ctx, next) {
//     const start = new Date();~
//     await next();
//     const ms = new Date() - start;
//     console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });


// generator在中间件的调用
app.use(convert(loggerGenerator()));

// routes
app.use(indexRouter.routes(), indexRouter.allowedMethods())
app.use(accountRouter.routes(), accountRouter.allowedMethods())

// app.use((ctx, next) => {
//     var url = ctx.url;
//     if (url === '/') {
//         ctx.body = '首页';
//     } else if (url === '/login') {
//         ctx.body = '登录';
//     } else if (url === '/register') {
//         ctx.body = '注册'
//     }
// });

app.listen(port, () => {
    console.log('Success,listen in port ' + port);
});