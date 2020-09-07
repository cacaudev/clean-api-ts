import Koa from 'koa';
import Router from 'koa-router';
import mainRoutes from '@infrastructure/routers/mainRouter';

const loadRoutes = (app: Koa) => {
  const router = new Router();
  mainRoutes(router);
  app.use(router.routes());
  app.use(router.allowedMethods());
};

export { loadRoutes };
