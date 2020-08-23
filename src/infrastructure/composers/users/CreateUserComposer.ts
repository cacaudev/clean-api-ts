import { UsersRepository } from '@repositories/implementations/UsersRepository';
import { CreateUserUseCase } from '@useCases/users/createUser/CreateUserUseCase';
import { CreateUserController } from '../../../interfaces/controllers/implementations/users/CreateUserController';

const usersRepository = new UsersRepository();

const createUserUseCase = new CreateUserUseCase(
  usersRepository
);

const createUserComposer = new CreateUserController(
  createUserUseCase
);

export { createUserComposer };

