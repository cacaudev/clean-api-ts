import { Context, Next } from 'koa';
import { HttpRequest } from '@presentation/helpers/types';
import { IMiddleware } from '@presentation/interfaces/IMiddleware';

class KoaMiddlewareAdapter {
  static adapt(middleware: IMiddleware) {
    return async (ctx: Context, next: Next) => {
      const httpRequest: HttpRequest = {
        headers: ctx.request.headers,
        contentType: ctx.request.type,
      };

      const httpResponse = await middleware.handle(httpRequest);

      if (httpResponse.statusCode === 200) {
        Object.assign(ctx, httpResponse.body);
        return await next();
      } else {
        ctx.status = httpResponse.statusCode;
        ctx.type = httpResponse.type || 'application/json';
        ctx.body = httpResponse.body;
        return;
      }
    };
  }
}

export { KoaMiddlewareAdapter };
