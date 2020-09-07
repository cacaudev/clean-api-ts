import { UserKnexRepository } from '../../orm/knex/repositories/UserKnexRepository';
import { LoginUseCase } from '@useCases/auth/login/LoginUseCase';
import { LoginController } from 'src/presentation/controllers/auth/LoginController';
import { PasswordComparer } from '@infrastructure/cryptography/bcrypt/passwordComparer';
import { AuthTokenGenerator } from '@infrastructure/cryptography/jwt/tokenGenerator';

const usersRepository = new UserKnexRepository();
const passwordComparer = new PasswordComparer();
const authTokenGenerator = new AuthTokenGenerator();

const loginUseCase = new LoginUseCase(
  usersRepository,
  passwordComparer,
  authTokenGenerator
);

const loginComposer = new LoginController(loginUseCase);

export { loginComposer };
