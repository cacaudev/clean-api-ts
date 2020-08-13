import { Context, Next } from 'koa';
import { IHttpClientController, HttpRequest } from '../../controllers/IHttpClientController';

class KoaRouterAdapter {
  static adapt (controller: IHttpClientController ) {
    return async (ctx: Context, next: Next) => {
      const httpRequest: HttpRequest = {
        body: ctx.request.body,
        query: ctx.query,
        params: ctx.params
      };

      const httpResponse = await controller.handle(httpRequest);

      ctx.status = httpResponse.status;
      ctx.type = httpResponse.type || 'application/json';
      ctx.body = httpResponse.body || { message: 'Hello from ts-node-api!' };
    }
  }
}

export { KoaRouterAdapter };
