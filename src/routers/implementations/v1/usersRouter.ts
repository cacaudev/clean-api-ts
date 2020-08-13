import Router from 'koa-router';

import { createUserController } from "@useCases/implementations/users/createUser";
import { KoaRouterAdapter } from '@providers/adapters/koaRouterAdapter';

const usersRouter = new Router({ prefix: '/user' });

usersRouter
  //.post('/', createUserController.handle);
  .post('/', KoaRouterAdapter.adapt(createUserController));

export { usersRouter };
