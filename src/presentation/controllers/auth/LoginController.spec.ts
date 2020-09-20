import {
  InternalServerError,
  MissingParamError,
  UnauthorizedError,
} from '@presentation/helpers/errors';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { IHashComparer, IHasher } from '@security/cryptography';
import { LoginController } from './loginController';

const makeSut = () => {
  class UserRepositorySpy {
    findByEmail(email: string) {}
    findById(id: string) {}
    getAll() {}
    add(user) {}
    update(fieldsToChange, id: string) {}
    delete(id: string) {}
  }
  class PasswordComparerSpy {
    compare() {}
  }
  class TokenGeneratorSpy {
    hash() {}
  }
  class LoginUseCaseSpy {
    email: string;
    password: string;

    constructor(
      usersRepository: IUsersRepository,
      passwordComparer: IHashComparer,
      tokenGenerator: IHasher,
    ) {}

    execute(email: string, password: string) {
      this.email = email;
      this.password = password;
    }
  }

  const userRepositorySpy = new UserRepositorySpy();
  const passwordComparerSpy = new PasswordComparerSpy();
  const tokenGeneratorSpy = new TokenGeneratorSpy();
  const loginUseCaseSpy = new LoginUseCaseSpy(
    userRepositorySpy,
    passwordComparerSpy,
    tokenGeneratorSpy,
  );
  const sut = new LoginController(loginUseCaseSpy);
  return {
    sut,
    loginUseCaseSpy,
  };
};

describe.skip('Login Controller', () => {
  test('Should return 400 if no email is provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: { password: 'anyPassword' },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('email').message);
  });

  test('Should return 400 if no password is provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: { email: 'anyEmail@email.com' },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('password').message);
  });

  test('Should return 500 if no httpRequest is provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {};
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body.error).toBe(new InternalServerError().message);
  });

  test('Should return 500 if no httpRequest body is provided', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {},
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });

  test('Should return 401 when credentials are wrong', async () => {
    const { sut } = makeSut();
    const httpRequest = {
      body: {
        email: 'anyEmail@email.com',
        password: 'anyPassword',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(401);
    expect(httpResponse.body.error).toBe(new UnauthorizedError().message);
  });

  test('Should return 200 when correct parameters', async () => {
    const { sut, loginUseCaseSpy } = makeSut();
    const httpRequest = {
      body: {
        email: 'correctEmail@email.com',
        password: 'correctEmail',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(loginUseCaseSpy.email).toBe(httpRequest.body.email);
    expect(loginUseCaseSpy.password).toBe(httpRequest.body.password);
    expect(httpResponse.statusCode).toBe(200);
  });
});
