import { CreateUserController } from '@controllers/users/createUserController';
import { PasswordEncrypter } from '@infrastructure/cryptography/bcrypt/passwordEncrypter';
import { CreateUserUseCase } from '@useCases/users/createUserUseCase';
import { UserKnexRepository } from '../../orm/knex/repositories/UserKnexRepository';

const usersRepository = new UserKnexRepository();
const bcryptPasswordEncrypter = new PasswordEncrypter();

const createUserUseCase = new CreateUserUseCase(usersRepository, bcryptPasswordEncrypter);

const createUserComposer = new CreateUserController(createUserUseCase);

export { createUserComposer };
