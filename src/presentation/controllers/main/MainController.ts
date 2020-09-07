import { IHttpClientController } from '@presentation/interfaces/IHttpClientController';
import { HttpRequest } from '@presentation/helpers/types';
import { HttpClientResponse } from '@presentation/helpers/HttpClientResponse';

export class MainController implements IHttpClientController {
  handle = async (httpRequest: HttpRequest) => {
    return HttpClientResponse.ok({
      message: 'Hello from Node Rest API!',
    });
  };
}
