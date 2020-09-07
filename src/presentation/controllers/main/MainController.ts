import { IHttpClientController } from '@controllers/IHttpClientController';
import { HttpRequestType } from '@presentation/helpers/types';
import { HttpClientResponse } from '@presentation/helpers/HttpClientResponse';

export class MainController implements IHttpClientController {
  handle = async (httpRequest: HttpRequestType) => {
    return HttpClientResponse.ok({
      message: 'Hello from Node Rest API!',
    });
  };
}
