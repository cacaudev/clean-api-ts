import { Context, Next } from 'koa';
import Router from 'koa-router';

const baseRouter = new Router();

baseRouter.get('/', async (ctx: Context, next: Next) => {
  ctx.status = 200;
  ctx.type = 'application/json';
  ctx.body = { message: 'Hello ts-node from build!' };
  return;
});

export { baseRouter };
