import Router from 'koa-router';

import { loginComposer } from '@infrastructure/composers/auth/LoginComposer';
import {
  KoaControllerAdapter,
  KoaMiddlewareAdapter,
} from '@infrastructure/adapters';
import { ContentTypeMiddleware } from '@presentation/middlewares/ContentTypeMiddleware';

export default (router: Router): void => {
  const authRouter = new Router();
  authRouter.prefix('/auth');

  const contentTypeCheck = new ContentTypeMiddleware();

  authRouter.post(
    '/login',
    KoaMiddlewareAdapter.adapt(contentTypeCheck),
    KoaControllerAdapter.adapt(loginComposer)
  );

  router.use(authRouter.routes());
  router.use(authRouter.allowedMethods());
};
