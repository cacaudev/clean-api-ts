import Router from 'koa-router';

import { loginComposer } from '@infrastructure/composers/auth/LoginComposer';
import { KoaControllerAdapter } from '@infrastructure/adapters/koaControllerAdapter';

export default (router: Router): void => {
  const authRouter = new Router();
  authRouter.prefix('/auth');

  authRouter.post('/login', KoaControllerAdapter.adapt(loginComposer));

  router.use(authRouter.routes());
  router.use(authRouter.allowedMethods());
};
