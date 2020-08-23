import { UserKnexRepository } from '../../orm/knex/repositories/UserKnexRepository';
import { CreateUserUseCase } from '@useCases/users/createUser/CreateUserUseCase';
import { CreateUserController } from '../../../interfaces/controllers/implementations/users/CreateUserController';

const usersRepository = new UserKnexRepository();

const createUserUseCase = new CreateUserUseCase(
  usersRepository
);

const createUserComposer = new CreateUserController(
  createUserUseCase
);

export { createUserComposer };

