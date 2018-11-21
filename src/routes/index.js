import Router from 'koa-router';
import home from './home';
import account from './account';
import test from './test';
import api from './api';


const router = Router();

router.use('/', home.routes(), home.allowedMethods());
router.use('/account', account.routes(), account.allowedMethods());
router.use('/test', test.routes(), test.allowedMethods());
router.use('/api', api.routes(), api.allowedMethods());

module.exports = router;