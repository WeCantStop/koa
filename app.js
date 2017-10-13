const Koa = require('koa');
// 使用generate中间件时候需要使用koa-convert封装一下
const convert = require('koa-convert');
const Router = require('koa-router');
const views = require('koa-views')
const static = require('koa-static');
const path = require('path');
const mongoose = require('mongoose');
require('babel-register')

var cors = require('koa2-cors');
// 中间间
const loggerGenerator = require('./middlewear/logger');
const bodyparser = require('koa-bodyparser');
// 路由中间件
const indexRouter = require('./routes/index');
const accountRouter = require('./routes/account');
const testRouter = require('./routes/test');

const app = new Koa();
const port = 3001;
const db = 'mongodb://127.0.0.1:27017/koa_db';


/** mongoose连接数据库 **/
// 连接数据库 
mongoose.connect(db,{useMongoClient: true}, (err) => {
    if (err){
        console.log(err);
    }
    console.log('数据库连接完成,地址为=> ' + db);
});

// 此处开始堆叠各种中间件

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
app.use(indexRouter.routes(), indexRouter.allowedMethods())
app.use(accountRouter.routes(), accountRouter.allowedMethods())
app.use(testRouter.routes(), testRouter.allowedMethods())

app.listen(port, () => {
    console.log('Success,listen in port ' + port);
});