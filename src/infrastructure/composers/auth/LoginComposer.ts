import { PasswordComparer } from '@infrastructure/cryptography/bcrypt/passwordComparer';
import { AuthTokenGenerator } from '@infrastructure/cryptography/jwt/tokenGenerator';
import { LoginUseCase } from '@useCases/auth/loginUseCase';
import { LoginController } from 'src/presentation/controllers/auth/loginController';
import { UserKnexRepository } from '../../orm/knex/repositories/UserKnexRepository';

const usersRepository = new UserKnexRepository();
const passwordComparer = new PasswordComparer();
const authTokenGenerator = new AuthTokenGenerator();

const loginUseCase = new LoginUseCase(
  usersRepository,
  passwordComparer,
  authTokenGenerator,
);

const loginComposer = new LoginController(loginUseCase);

export { loginComposer };
