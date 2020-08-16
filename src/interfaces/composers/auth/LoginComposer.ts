import { UsersRepository } from '@repositories/implementations/UsersRepository';
import { LoginUseCase } from '@useCases/auth/LoginUseCase';
import { LoginController } from '@interfaces/controllers/implementations/auth/LoginController';

const usersRepository  = new UsersRepository();

const loginUseCase = new LoginUseCase(
  usersRepository
);

const loginComposer = new LoginController(
  loginUseCase
);

export { loginComposer };
