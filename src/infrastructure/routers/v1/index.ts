import Router from 'koa-router';

import { usersRouter } from './usersRouter';
import { authRouter } from './authRouter';

const v1Router = new Router({ prefix: '/v1'});

v1Router
  .use(authRouter.routes())
  .use(usersRouter.routes());

export { v1Router };

