import { mainController } from '@interfaces/composers/MainComposer';
import { KoaControllerAdapter } from '../../adapters/koaControllerAdapter';
import Router from 'koa-router';

const mainRouter = new Router();

mainRouter
  .get('/', KoaControllerAdapter.adapt(mainController));

export { mainRouter };

/*
baseRouter
  .get('/', KoaControllerAdapter.adapt(new MainController))
  .use(v1Router.routes());

export { baseRouter };*/
