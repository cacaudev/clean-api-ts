import Router from 'koa-router';

import { mainController } from '@infrastructure/composers/MainComposer';
import { KoaControllerAdapter } from '@infrastructure/adapters/koaControllerAdapter';
import v1Router from './v1';

export default (router: Router): void => {
  router.get('/', KoaControllerAdapter.adapt(mainController));

  v1Router(router);
};
