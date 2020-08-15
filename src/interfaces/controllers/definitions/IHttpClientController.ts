import { HttpRequestType, HttpResponseType } from '../../helpers/types';

interface IHttpClientController {
  handle(httpRequest: HttpRequestType): Promise<HttpResponseType>;
};

export { IHttpClientController };
