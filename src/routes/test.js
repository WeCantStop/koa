const Router = require('koa-router');
const router = new Router();
// constroller
const UserController = require('../controller/user');

router.post('/connect', UserController.addUser);
router.post('/getUser', UserController.getUser);
router.post('/delUser', UserController.delUser);
router.post('/updateUserDetail', UserController.updateUserDetail);

module.exports = router;
