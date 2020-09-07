import { Context, Next } from 'koa';
import { IHttpClientController } from '@controllers/IHttpClientController';
import { HttpRequestType } from '@presentation/helpers/types';

class KoaControllerAdapter {
  static adapt(controller: IHttpClientController) {
    return async (ctx: Context, next: Next) => {
      const httpRequest: HttpRequestType = {
        body: ctx.request.body,
        query: ctx.query,
        params: ctx.params,
      };

      const httpResponse = await controller.handle(httpRequest);

      ctx.status = httpResponse.statusCode;
      ctx.type = httpResponse.type || 'application/json';
      ctx.body = httpResponse.body;
    };
  }
}

export { KoaControllerAdapter };
