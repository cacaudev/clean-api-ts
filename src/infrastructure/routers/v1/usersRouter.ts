import Router from 'koa-router';

import { createUserComposer } from "@interfaces/composers/users/CreateUserComposer";
import { KoaControllerAdapter } from '@infrastructure/adapters/KoaControllerAdapter';

const usersRouter = new Router({ prefix: '/user' });

usersRouter
  .post('/', KoaControllerAdapter.adapt(createUserComposer));

export { usersRouter };

