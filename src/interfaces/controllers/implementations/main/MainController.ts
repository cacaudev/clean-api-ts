import { IHttpClientController } from '../../definitions';
import { HttpRequest } from '../../../helpers/types';
import { ClientResponse } from '../../../helpers/ClientResponse';

export class MainController implements IHttpClientController {

  handle = async (httpRequest: HttpRequest) => {
    return ClientResponse.ok({
      message: 'Hello from Node Rest API!'
    });
  }
};
