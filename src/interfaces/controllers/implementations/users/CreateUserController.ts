import { CreateUserUseCase } from '@useCases/users/createUser/CreateUserUseCase';
import { IHttpClientController } from '../../definitions/IHttpClientController';
import { HttpRequestType } from '../../../helpers/types';
import { HttpClientResponse } from '../../../helpers/HttpClientResponse';

export class CreateUserController implements IHttpClientController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ) {}

  handle = async (httpRequest: HttpRequestType) => {
    const { name, surname, email, password } = httpRequest.body;

    try {
      const newUser = await this.createUserUseCase.execute({
        name,
        surname,
        email,
        password
      });

      return HttpClientResponse.created(newUser);

    } catch (error) {
      return HttpClientResponse.badRequest({
        message: error.message || 'Unexpected error'
      });
    }
  }
};

