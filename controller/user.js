// constroller 层
const mongoose = require('mongoose');
const UserModel = require('../models/user');

class UserController {

    constructor() {
        // this.addUser = this.addUser.bind(this)
    };

    // post
    async addUser (ctx ,next){
        // 处理post请求所需要 bodyparser
        var userName = ctx.request.body.name,
            age = ctx.request.body.age;

        if ( ctx.method.toLowerCase() !== 'post' ){
            ctx.body = {
                code: 1,
                message: 'need get method',
                status: 'fail'
            }
            return;
        }
    
        if (!userName) {
            ctx.body = {
                code: 1,
                message: '请填写完整信息',
                status: 'fail'
            };
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
    }

    async getUser (ctx, next){
        // 连接数据库 
        mongoose.connect('mongodb://127.0.0.1:27017/koa_db',{useMongoClient: true}, (err) => {
            if (err){
                console.log(err);
            }else{
                console.log('数据库连接成功');
            }
        });

        await UserModel.find({}, (err, doc) => {
            if (err){
                console.log(err);
            }
            ctx.body = {
                code: 0,
                message: 'success',
                status: 'OK',
                data: doc
            }
        })

    }

    async delUser (ctx, next) {
        // 连接数据库 
        mongoose.connect('mongodb://127.0.0.1:27017/koa_db',{useMongoClient: true}, (err) => {
            if (err){
                console.log(err);
            }else{
                console.log('数据库连接成功');
            }
        });

        var userName = ctx.request.body.name;
        
        await UserModel.remove({name: userName},(err) => {
            if (err){
                conosle.log(err);
            }
            ctx.body = {
                code: 0,
                message: 'success',
                status: 'OK'
            }
        })

    }
}

module.exports = new UserController();
