import { HttpRequestType, HttpResponseType } from '@presentation/helpers/types';

interface IMiddleware {
  handle(httpRequest: HttpRequestType): Promise<HttpResponseType>;
}

export { IMiddleware };
