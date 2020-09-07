import { HttpRequestType, HttpResponseType } from '@presentation/helpers/types';

interface IHttpClientController {
  handle(httpRequest: HttpRequestType): Promise<HttpResponseType>;
}

export { IHttpClientController };
