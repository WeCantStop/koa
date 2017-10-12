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
        // 获取请求值
        var id = ctx.request.body.id,
        data= null;

        data = !id ? {} : {_id: id};

        // 连接数据库 
        mongoose.connect('mongodb://127.0.0.1:27017/koa_db',{useMongoClient: true}, (err) => {
            if (err){
                console.log(err);
            }
        });

        await UserModel.find(data, (err, doc) => {
            if (err){
                console.log(err);
            }
            // 只有一个情况下给出一个对象
            if (!!id && doc.length === 1){
                doc = doc[0];
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

    async updateUserDetail (ctx, next) {
        // 连接数据库 
        mongoose.connect('mongodb://127.0.0.1:27017/koa_db',{useMongoClient: true}, (err) => {
            if (err){
                console.log(err);
            }
        });
        var reqData = ctx.request.body;
        await UserModel.findById(reqData._id, async (err,doc) => {
            if (err){
                console.log(err);
            }

            doc.set({
                name: reqData.name,
                age: reqData.age,
                gender: reqData.gender,
                homeTown: reqData.homeTown
            })

            await doc.save((err) => {
                if (err){
                    conosle.log(err);
                }
                ctx.body = {
                    code: 0,
                    message: 'save success',
                    status: 'OK'
                }
            })
        })
    }
}

module.exports = new UserController();
