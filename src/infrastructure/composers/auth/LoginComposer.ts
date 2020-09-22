import { LoginController } from '@controllers/auth/LoginController';
import { PasswordComparer } from '@infrastructure/cryptography/bcrypt/passwordComparer';
import { AuthTokenGenerator } from '@infrastructure/cryptography/jwt/tokenGenerator';
import { UserSequelizeRepository } from '@infrastructure/orm/sequelize/repositories/UserSequelizeRepository';
import { LoginUseCase } from '@useCases/auth/loginUseCase';
//import { UserKnexRepository } from '../../orm/knex/repositories/UserKnexRepository';

const usersRepository = new UserSequelizeRepository();
const passwordComparer = new PasswordComparer();
const authTokenGenerator = new AuthTokenGenerator();

const loginUseCase = new LoginUseCase(
  usersRepository,
  passwordComparer,
  authTokenGenerator,
);

const loginComposer = new LoginController(loginUseCase);

export { loginComposer };
