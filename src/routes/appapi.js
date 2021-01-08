const Router = require('koa-router');
const router = new Router();
const db = require('../db');
const { successBody, errorBody } = require('../utils/resTemplate');
const { checkReqBody } = require('../utils/reqValidate');

router.get('/queryGradeList', async (ctx, next) => {
  await db.exec('SELECT id, name, leader FROM grade WHERE delete_flag != 1').then(res => {
    ctx.body = successBody(res);
  })
});

router.post('/createGrade', async (ctx, next) => {
  const { name, leader } = ctx.request.body;
  if (checkReqBody({ name, leader })) {
    ctx.body = errorBody(`${checkReqBody({ name, leader })}不能为空`);
  } else {
    await db.exec(`INSERT INTO grade(name, leader, delete_flag) VALUES("${name}", "${leader}", 0);`).then(res => {
      ctx.body = successBody();
    })
  }
})

router.post('/updateGrade', async (ctx, next) => {
  const { id, name, leader } = ctx.request.body;
  if (checkReqBody({ id, name, leader })) {
    ctx.body = errorBody(`${checkReqBody({ id, name, leader })}不能为空`);
  } else {
    await db.exec(`UPDATE grade SET name="${name}", leader="${leader}" WHERE id="${id}";`).then(res => {
      ctx.body = successBody();
    })
  }
})

router.post('/deleteGrade', async (ctx, next) => {
  const { id } = ctx.request.body;
  if (checkReqBody({ id })) {
    ctx.body = errorBody(`${checkReqBody({ id })}不能为空`);
  } else {
    await db.exec(`DELETE FROM grade WHERE id="${id}"`).then(res => {
      ctx.body = successBody();
    })
  }
})

module.exports = router;
