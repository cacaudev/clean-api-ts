import { IHttpClientController } from '@presentation/interfaces/IHttpClientController';
import { HttpRequest } from '@presentation/helpers/types';
import { HttpClientResponse } from '@presentation/helpers/HttpClientResponse';
import { MissingParamError } from '@presentation/helpers/errors';
import { LoginUseCase } from '@useCases/auth/login/LoginUseCase';

class LoginController implements IHttpClientController {
  constructor(private loginUseCase: LoginUseCase) {}

  handle = async (httpRequest: HttpRequest) => {
    try {
      const { email, password } = httpRequest.body;

      if (!email) {
        return HttpClientResponse.badRequest(new MissingParamError('email'));
      }
      if (!password) {
        return HttpClientResponse.badRequest(new MissingParamError('password'));
      }

      const accessToken = await this.loginUseCase.execute({ email, password });

      if (accessToken) {
        return HttpClientResponse.ok({ accessToken });
      } else {
        return HttpClientResponse.unauthorizedError();
      }
    } catch (error) {
      return HttpClientResponse.serverError();
    }
  };
}

export { LoginController };
