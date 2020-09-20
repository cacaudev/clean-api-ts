import { RouterControllerAdapter } from '@infrastructure/adapters/routerControllerAdapter';
import { createUserComposer } from '@infrastructure/composers/users/createUserComposer';
import Router from 'koa-router';

export default (router: Router): void => {
  const usersRouter = new Router();
  usersRouter.prefix('/user');

  usersRouter.post('/', RouterControllerAdapter.adapt(createUserComposer));

  router.use(usersRouter.routes());
  router.use(usersRouter.allowedMethods());
};
