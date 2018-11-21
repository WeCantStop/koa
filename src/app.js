require('babel-register')
const Koa = require('koa');
// 使用generate中间件时候需要使用koa-convert封装一下
const convert = require('koa-convert');
const views = require('koa-views')
const static = require('koa-static');
const path = require('path');
const config = require('./config/index');
// const connection = require('./config/connection');

var cors = require('koa2-cors');
// 中间间
const loggerGenerator = require('./middlewear/logger');
const bodyparser = require('koa-bodyparser');
// 路由中间件
const index = require('./routes/index');
const app = new Koa();

/** 此处开始堆叠各种中间件 **/

// 调用静态资源
app.use(static(path.join(__dirname, './static')));
// 使用模板引擎 view enginer
app.use(views(path.join(__dirname, './views'), {
    extension: 'pug'
}))
// generator在中间件的调用
app.use(convert(loggerGenerator()));
// 获取post参数的中间件
app.use(bodyparser());
// 用来跨域的中间件
app.use(cors());
// routes
app.use(index.routes(), index.allowedMethods());

app.listen(config.serverPort, () => {
    console.log('服务器创建成功 => localhost:' + config.serverPort)
});
