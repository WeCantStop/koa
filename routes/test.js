const Router = require('koa-router');
const testRouter = new Router();
// constroller
const UserController = require('../controller/user');

// router 前缀
testRouter.prefix('/test');

testRouter.post('/connect', UserController.addUser);
testRouter.post('/getUser', UserController.getUser);
testRouter.post('/delUser', UserController.delUser);
testRouter.post('/updateUserDetail', UserController.updateUserDetail);

module.exports = testRouter;
