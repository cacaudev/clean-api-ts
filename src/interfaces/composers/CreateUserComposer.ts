import { UsersRepository } from '@repositories/UsersRepository';
import { CreateUserUseCase } from '@useCases/users/createUser/CreateUserUseCase';
import { CreateUserController } from '../controllers/implementations/users/CreateUserController';

const usersRepository = new UsersRepository();

const createUserUseCase = new CreateUserUseCase(
  usersRepository
);

const createUserController = new CreateUserController(
  createUserUseCase
);

export { createUserController };

