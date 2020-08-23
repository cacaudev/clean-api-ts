import Router from 'koa-router';

import { createUserComposer } from "@interfaces/composers/users/CreateUserComposer";
import { KoaControllerAdapter } from '@infrastructure/adapters/KoaControllerAdapter';

export default (router: Router): void => {
  const usersRouter = new Router();
  usersRouter.prefix('/user');

  usersRouter.post(
    '/',
    KoaControllerAdapter.adapt(createUserComposer)
  );

  router.use(usersRouter.routes());
};

