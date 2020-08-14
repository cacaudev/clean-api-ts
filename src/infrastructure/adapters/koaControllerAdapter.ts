import { Context, Next } from 'koa';
import { IHttpClientController } from '@interfaces/controllers/definitions/IHttpClientController';
import { HttpRequest } from '@interfaces/helpers/types';

class KoaControllerAdapter {
  static adapt (controller: IHttpClientController ) {
    return async (ctx: Context, next: Next) => {
      const httpRequest: HttpRequest = {
        body: ctx.request.body,
        query: ctx.query,
        params: ctx.params
      };

      const httpResponse = await controller.handle(httpRequest);

      ctx.status = httpResponse.statusCode;
      ctx.type = httpResponse.type || 'application/json';
      ctx.body = httpResponse.body;
    }
  }
}

export { KoaControllerAdapter };
