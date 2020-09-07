import { HttpRequest, HttpResponse } from '@presentation/helpers/types';

interface IHttpClientController {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}

export { IHttpClientController };
