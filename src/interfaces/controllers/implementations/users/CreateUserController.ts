import { CreateUserUseCase } from '@useCases/users/createUser/CreateUserUseCase';
import { HttpRequest, IHttpClientController } from '../../definitions/IHttpClientController';

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

      return {
        status: 201,
        type: 'application/json',
        body: newUser
      };
    } catch (error) {
      return {
        status: 400,
        type: 'application/json',
        body: { message: error.message || 'Unexpected error' }
      };
    }
  }
};

