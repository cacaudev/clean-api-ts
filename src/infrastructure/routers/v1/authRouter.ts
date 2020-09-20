import {
  RouterControllerAdapter,
  RouterMiddlewareAdapter,
} from '@infrastructure/adapters';
import { loginComposer } from '@infrastructure/composers/auth/loginComposer';
import { ContentTypeMiddleware } from '@presentation/middlewares/contentTypeMiddleware';
import Router from 'koa-router';

export default (router: Router): void => {
  const authRouter = new Router();
  authRouter.prefix('/auth');

  const contentTypeCheck = new ContentTypeMiddleware();

  authRouter.post(
    '/login',
    RouterMiddlewareAdapter.adapt(contentTypeCheck),
    RouterControllerAdapter.adapt(loginComposer),
  );

  router.use(authRouter.routes());
  router.use(authRouter.allowedMethods());
};
