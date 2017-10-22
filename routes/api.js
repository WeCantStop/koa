import Router from 'koa-router';
import { index, banner, author } from '../api/index';
import request from 'request';

const router = Router();
router.post('/index', async (ctx, body) => {
    ctx.body = await request(index);
 })
router.post('/banner', async (ctx, body) => {
    ctx.body = await request(banner);
 })

 router.post('/author', async (ctx, body) => {
    ctx.body = await request(author);
 })

 module.exports = router;
