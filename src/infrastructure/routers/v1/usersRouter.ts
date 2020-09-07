import Router from 'koa-router';

import { createUserComposer } from '@infrastructure/composers/users/CreateUserComposer';
import { RouterControllerAdapter } from '@infrastructure/adapters/routerControllerAdapter';

export default (router: Router): void => {
  const usersRouter = new Router();
  usersRouter.prefix('/user');

  usersRouter.post('/', RouterControllerAdapter.adapt(createUserComposer));

  router.use(usersRouter.routes());
  router.use(usersRouter.allowedMethods());
};
