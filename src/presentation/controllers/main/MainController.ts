import { HttpClientResponse } from '@presentation/helpers/httpClientResponse';
import { HttpRequest } from '@presentation/helpers/types';
import { IHttpClientController } from '@presentation/interfaces/IHttpClientController';

export class MainController implements IHttpClientController {
  handle = async (httpRequest: HttpRequest) => {
    return HttpClientResponse.ok({
      message: 'Hello from Node Rest API!',
    });
  };
}
