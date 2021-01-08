import Router from 'koa-router';
import home from './home';
import appapi from './appapi';

const router = Router();

router.use('/', home.routes(), home.allowedMethods());
router.use('/appapi', appapi.routes(), appapi.allowedMethods());

module.exports = router;