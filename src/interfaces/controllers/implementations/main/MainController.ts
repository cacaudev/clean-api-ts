import { IHttpClientController } from '../../definitions';
import { HttpRequestType } from '../../../helpers/types';
import { HttpClientResponse } from '../../../helpers/HttpClientResponse';

export class MainController implements IHttpClientController {

  handle = async (httpRequest: HttpRequestType) => {
    return HttpClientResponse.ok({
      message: 'Hello from Node Rest API!'
    });
  }
};
