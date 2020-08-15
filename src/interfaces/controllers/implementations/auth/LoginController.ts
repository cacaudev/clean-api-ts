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

      if (email == correctCredentials.email && password == correctCredentials.password) {
        return HttpClientResponse.ok();
      } else {
        return HttpClientResponse.unauthorizedError();
      }
    } catch (error) {
      return HttpClientResponse.serverError();
    }
  }
};
