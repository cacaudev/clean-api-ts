/*
 * @Author: cacaudev
 * @Date: 2020-07-15 17:49:29
 * @Last Modified by: cacaudev
 * @Last Modified time: 2020-07-15 19:26:27
 */
import { Context, Next } from 'koa';
import Router from 'koa-router';

import { v1Router } from './v1';

const baseRouter = new Router();

baseRouter
  .get('/', async (ctx: Context, next: Next) => {
    ctx.status = 200;
    ctx.type = 'application/json';
    ctx.body = { message: 'Hello ts-node from build!' };
    return;
  })
  .use(v1Router.routes());
/*.use('/*', async (ctx: Context) => {
    ctx.status = 405;
    ctx.type = "application/json";
    ctx.body = {
      error: {
        name: "METHOD_NOT_ALLOWED",
        message: "REST Method not allowed"
      }
    };
    return;
  });*/

export { baseRouter };
