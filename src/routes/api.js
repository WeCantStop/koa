import Router from 'koa-router';
import { index, banner, author, broadcast, group, theatre, books } from '../api/index';
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

 router.post('/broadcast', async (ctx, body) => {
    ctx.body = await request(broadcast);
 })

 router.post('/group', async (ctx, body) => {
    ctx.body = await request(group);
 })

 router.post('/theatreHot', async (ctx, body) => {
    ctx.body = await request(theatre.hot);
 })

 router.post('/theatreFreeNew', async (ctx, body) => {
    ctx.body = await request(theatre.FreeNew);
 })

 router.post('/theatreNew', async (ctx, body) => {
    ctx.body = await request(theatre.new);
 })

 router.post('/booksVirtualHot', async (ctx, body) => {
    ctx.body = await request(books.virtualHot);
 })

 router.post('/booksNotVirtualHot', async (ctx, body) => {
    ctx.body = await request(books.notVirtualHot);
 })

 router.post('/booksLibrary', async (ctx, body) => {
    ctx.body = await request(books.library);
 })

 // 电影详情
 router.post('/movieDetail', async (ctx, body) => {
    const movieId = ctx.request.body.id;
    ctx.body = await request(theatre.movieDetail + movieId);
 })

 module.exports = router;
