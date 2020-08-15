import { IHttpClientController } from '../../definitions';
import { HttpRequestType } from '../../../helpers/types';
import { HttpClientResponse } from '../../../helpers/HttpClientResponse';
import { MissingParamError } from '@interfaces/helpers/errors';

export class LoginController implements IHttpClientController {

  handle = async (httpRequest: HttpRequestType) => {

    // TODO: Remove this later, only for testing purposes
    const correctCredentials = {
      email: 'correctEmail@email.com',
      password: 'correctEmail'
    };

    try {
      const { email, password } = httpRequest.body;

      if (!email) {
        return HttpClientResponse.badRequest(new MissingParamError('email'));
      }
      if (!password) {
        return HttpClientResponse.badRequest(new MissingParamError('password'));
      }

      // Todo: Remove this, substitute for token generator
      const accessToken = { accessToken: 'sfdsgd4f53d4s5f6ds74f564'};

      if (email == correctCredentials.email && password == correctCredentials.password) {
        return HttpClientResponse.ok(accessToken);
      } else {
        return HttpClientResponse.unauthorizedError();
      }
    } catch (error) {
      return HttpClientResponse.serverError();
    }
  }
};
