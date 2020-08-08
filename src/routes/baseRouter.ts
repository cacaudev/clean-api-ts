import { Context, Next } from 'koa';
import Router from 'koa-router';

import { v1Router } from './v1/v1Router';

const baseRouter = new Router();

baseRouter
  .get('/', async (ctx: Context, next: Next) => {
    ctx.status = 200;
    ctx.type = 'application/json';
    ctx.body = { message: 'Hello ts-node from build!' };
    return;
  })
  .use(v1Router.routes());

export { baseRouter };
