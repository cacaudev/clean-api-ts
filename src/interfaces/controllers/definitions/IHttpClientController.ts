import { HttpRequest, HttpResponse } from '../../helpers/types';

interface IHttpClientController {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
};

export { IHttpClientController };
