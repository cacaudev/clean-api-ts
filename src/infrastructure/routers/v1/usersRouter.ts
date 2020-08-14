import Router from 'koa-router';

import { createUserController } from "@interfaces/composers/CreateUserComposer";
import { KoaControllerAdapter } from '@infrastructure/adapters/KoaControllerAdapter';

const usersRouter = new Router({ prefix: '/user' });

usersRouter
  .post('/', KoaControllerAdapter.adapt(createUserController));

export { usersRouter };

