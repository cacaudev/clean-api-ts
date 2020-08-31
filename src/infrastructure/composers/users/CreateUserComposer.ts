import { UserKnexRepository } from '../../orm/knex/repositories/UserKnexRepository';
import { CreateUserUseCase } from '@useCases/users/createUser/CreateUserUseCase';
import { CreateUserController } from '../../../interfaces/controllers/implementations/users/CreateUserController';
import { PasswordEncrypter } from '@infrastructure/cryptography/bcrypt/passwordEncrypter';

const usersRepository = new UserKnexRepository();
const bcryptPasswordEncrypter = new PasswordEncrypter();

const createUserUseCase = new CreateUserUseCase(
  usersRepository,
  bcryptPasswordEncrypter
);

const createUserComposer = new CreateUserController(
  createUserUseCase
);

export { createUserComposer };

