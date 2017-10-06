const Router = require('koa-router');
const testRouter = new Router();
// constroller
const UserController = require('../controller/user');

// router 前缀
testRouter.prefix('/test');

testRouter.post('/connect', UserController.addUser)

module.exports = testRouter;
