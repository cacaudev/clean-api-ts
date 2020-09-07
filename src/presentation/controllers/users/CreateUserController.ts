import { CreateUserUseCase } from '@useCases/users/createUser/CreateUserUseCase';
import { IHttpClientController } from '@controllers/IHttpClientController';
import { HttpRequestType } from '@presentation/helpers/types';
import { HttpClientResponse } from '@presentation/helpers/HttpClientResponse';
import {
  MissingParamError,
  InvalidFieldError,
} from '@presentation/helpers/errors';

export class CreateUserController implements IHttpClientController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle = async (httpRequest: HttpRequestType) => {
    try {
      const { name, surname, email, password } = httpRequest.body;

      if (!name) {
        return HttpClientResponse.badRequest(new MissingParamError('name'));
      }
      if (!surname) {
        return HttpClientResponse.badRequest(new MissingParamError('surname'));
      }
      if (!email) {
        return HttpClientResponse.badRequest(new MissingParamError('email'));
      }
      if (!password) {
        return HttpClientResponse.badRequest(new MissingParamError('password'));
      }

      const newUser = await this.createUserUseCase.execute({
        name,
        surname,
        email,
        password,
      });
      if (!newUser) {
        return HttpClientResponse.conflictError('Email already in use.');
      }

      return HttpClientResponse.created(newUser);
    } catch (error) {
      return HttpClientResponse.serverError();
    }
  };
}
