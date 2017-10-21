import Router from 'koa-router';
import { banner } from '../api/index';
import request from 'request';

const router = Router();
router.post('/banner', async (ctx, body) => {
    ctx.body = await request(banner);
 })

 module.exports = router;
