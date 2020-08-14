import { HttpRequest, IHttpClientController } from '../../definitions/IHttpClientController';

export class MainController implements IHttpClientController {

  handle = async (httpRequest: HttpRequest) => {
    return {
      status: 200,
      type: 'application/json',
      body: { message: 'Hello from main route!' }
    };
  }
};
