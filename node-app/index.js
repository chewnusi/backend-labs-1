const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Simple Koa app!';
});

app.listen(3000);
console.log('Koa app running on port 3000');
