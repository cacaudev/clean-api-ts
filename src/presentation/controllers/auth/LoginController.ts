import { MissingParamError } from '@presentation/helpers/errors';
import { HttpClientResponse } from '@presentation/helpers/HttpClientResponse';
import { HttpRequest } from '@presentation/helpers/types';
import { IHttpClientController } from '@presentation/interfaces/IHttpClientController';
import { LoginUseCase } from '@useCases/auth/loginUseCase';

class LoginController implements IHttpClientController {
  constructor(private loginUseCase: LoginUseCase) {}

  async handle(httpRequest: HttpRequest) {
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
  }
}

export { LoginController };
