import { RouterControllerAdapter } from '@infrastructure/adapters/routerControllerAdapter';
import { mainController } from '@infrastructure/composers/MainComposer';
import Router from 'koa-router';
import v1Router from './v1';

export default (router: Router): void => {
  router.get('/', RouterControllerAdapter.adapt(mainController));

  v1Router(router);
};
