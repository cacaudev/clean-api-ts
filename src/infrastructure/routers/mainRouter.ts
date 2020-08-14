import Router from 'koa-router';

import { mainController } from '@interfaces/composers/MainComposer';
import { KoaControllerAdapter } from '../adapters/koaControllerAdapter';
import { v1Router } from './v1';

const mainRouter = new Router();

mainRouter
  .get('/', KoaControllerAdapter.adapt(mainController))
  .use(v1Router.routes());

export { mainRouter };
