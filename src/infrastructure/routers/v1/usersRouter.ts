import Router from 'koa-router';

import { createUserComposer } from "@infrastructure/composers/users/CreateUserComposer";
import { KoaControllerAdapter } from '@infrastructure/adapters/KoaControllerAdapter';

export default (router: Router): void => {
  const usersRouter = new Router();
  usersRouter.prefix('/user');

  usersRouter.post(
    '/',
    KoaControllerAdapter.adapt(createUserComposer)
  );

  router.use(usersRouter.routes());
  router.use(usersRouter.allowedMethods());
};

