import { IHttpClientController } from '../../definitions';
import { HttpRequestType } from '@interfaces/helpers/types';
import { HttpClientResponse } from '@interfaces/helpers/HttpClientResponse';
import { MissingParamError } from '@interfaces/helpers/errors';
import { LoginUseCase } from '@useCases/auth/login/LoginUseCase';

export class LoginController implements IHttpClientController {

  constructor(
    private loginUseCase: LoginUseCase
  ) {}

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

      await this.loginUseCase.execute({ email, password });

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
