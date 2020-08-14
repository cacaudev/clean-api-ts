import { HttpRequest, IHttpClientController } from '../../IHttpClientController';

export class MainController implements IHttpClientController {

  handle = async (httpRequest: HttpRequest) => {
    return {
      status: 200,
      type: 'application/json',
      body: { message: 'Hello from main route!' }
    };
  }
};
