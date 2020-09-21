import { HttpClientResponse } from '@presentation/helpers/HttpClientResponse';
import { HttpRequest } from '@presentation/helpers/types';
import { IHttpClientController } from '@presentation/interfaces/IHttpClientController';

export class MainController implements IHttpClientController {
  async handle(httpRequest: HttpRequest) {
    return HttpClientResponse.ok({
      message: 'Hello from Node Rest API!',
    });
  }
}
