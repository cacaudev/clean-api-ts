import Router from 'koa-router';

import usersRouter from './usersRouter';
import authRouter from './authRouter';

export default (router: Router): void => {
  const v1Router = new Router();
  v1Router.prefix('/v1');

  authRouter(v1Router);
  usersRouter(v1Router);

  router.use(v1Router.routes());
  router.use(v1Router.allowedMethods());
};

