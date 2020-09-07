import { HttpRequest, HttpResponse } from '@presentation/helpers/types';

interface IMiddleware {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}

export { IMiddleware };
