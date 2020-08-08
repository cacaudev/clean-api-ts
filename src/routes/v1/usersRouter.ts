import { createUserController } from "@useCases/users/createUser";

import Router from 'koa-router';

const usersRouter = new Router({ prefix: '/user' });

usersRouter
  .post('/', createUserController.handle);

export { usersRouter };
