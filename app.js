const Koa = require('koa');
// 使用generate中间件时候需要使用koa-convert封装一下
const convert = require('koa-convert');
const Router = require('koa-router');
const views = require('koa-views')
const static = require('koa-static');
const path = require('path');
// 中间间
const loggerGenerator = require('./middlewear/logger');
const bodyparser = require('koa-bodyparser');
// 路由中间件
const indexRouter = require('./routes/index');
const accountRouter = require('./routes/account');
const testRouter = require('./routes/test');

const app = new Koa();
const port = 3001;

// 此处开始堆叠各种中间件

// 调用静态资源
app.use(static(path.join(__dirname, './static')));
// 使用模板引擎 view enginer
app.use(views(path.join(__dirname, './views'), {
    extension: 'pug'
}))

// generator在中间件的调用
app.use(convert(loggerGenerator()));

// routes
app.use(indexRouter.routes(), indexRouter.allowedMethods())
app.use(accountRouter.routes(), accountRouter.allowedMethods())
app.use(testRouter.routes(), testRouter.allowedMethods())

app.listen(port, () => {
    console.log('Success,listen in port ' + port);
});