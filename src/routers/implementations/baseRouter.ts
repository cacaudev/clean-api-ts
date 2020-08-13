import Router from 'koa-router';
import { KoaRouterAdapter } from '@providers/adapters/koaRouterAdapter';
import { IHttpClientController, HttpRequest, HttpResponse } from '../../controllers/IHttpClientController';

import { v1Router } from './v1/v1Router';

const baseRouter = new Router();

class MainController implements IHttpClientController {
  async handle (httpRequest: HttpRequest) {
    return {
      status: 200,
      type: 'application/json',
      body: { message: 'Hello from main route!' }
    };
  }
};

baseRouter
  .get('/', KoaRouterAdapter.adapt(new MainController))
  .use(v1Router.routes());

export { baseRouter };
