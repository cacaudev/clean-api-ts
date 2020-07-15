/*
 * @Author: cacaudev
 * @Date: 2020-07-15 17:49:29
 * @Last Modified by: cacaudev
 * @Last Modified time: 2020-07-15 18:23:52
 */
import { Context, Next } from 'koa';
import Router from 'koa-router';
import { v1Router } from './v1';

const baseRouter = new Router();

baseRouter
  .get('/', async (ctx: Context, next: Next) => {
    ctx.body = 'Hello ts-node from build!';
    return;
  })
  .use(v1Router.routes());

export { baseRouter };
