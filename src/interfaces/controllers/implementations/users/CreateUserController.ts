import { CreateUserUseCase } from '@useCases/users/createUser/CreateUserUseCase';
import { IHttpClientController } from '../../definitions/IHttpClientController';
import { HttpRequest } from '../../../helpers/types';
import { ClientResponse } from '../../../helpers/ClientResponse';

export class CreateUserController implements IHttpClientController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ) {}

  handle = async (httpRequest: HttpRequest) => {
    const { name, surname, email, password } = httpRequest.body;

    try {
      const newUser = await this.createUserUseCase.execute({
        name,
        surname,
        email,
        password
      });

      return ClientResponse.created(newUser);

    } catch (error) {
      return ClientResponse.badRequest({
        message: error.message || 'Unexpected error'
      });
    }
  }
};

