const Router = require('koa-router');
const testRouter = new Router();

const mongoose = require('mongoose');

// 引用好定义好的模型 model 层
const UserModel = require('../models/user.js')

testRouter.prefix('/test');

// 这里其实是 controller 层
testRouter.get('/connect', async (ctx ,next)=> {
    // var db = mongoose.connect('mongoose://localhost/koa_db');  老方法，会报错
    var userName = ctx.query.name,
        age = ctx.query.age;

    if (!userName || !age) {
        ctx.body = "请填写完整信息";
        return;
    }

    // 连接数据库 
    mongoose.connect('mongodb://127.0.0.1:27017/koa_db',{useMongoClient: true}, (err) => {
        if (err){
            console.log(err);
        }else{
            console.log('数据库连接成功');
        }
    });

    var user = new UserModel({
        name: userName,
        age: age
    })

    await user.save((err) => {
        if (err){
            console.log(err);
        }
        ctx.body = {
            code: 0,
            message: '新增成功',
            status: 'ok'
        };
    
    })
})

module.exports = testRouter;
