import { User } from '@entities/User';
import {
  InternalServerError,
  MissingParamError,
  UnauthorizedError,
} from '@presentation/helpers/errors';
import { LoginUseCase } from '@useCases/auth/loginUseCase';
import { LoginController } from './loginController';

const userExample = {
  name: 'Cacau',
  surname: 'Dev',
  password: '123456',
  email: 'test@email.com',
};

const makeUsersRepositorySpy = () => {
  class UsersRepositorySpy {
    async findByEmail(email: string) {
      userExample.email = email;
      return new User(userExample);
    }
    findById(id: string): Promise<void | User> {
      throw new Error('Method not implemented.');
    }
    getAll(): Promise<void | User[]> {
      throw new Error('Method not implemented.');
    }
    add(user: User): Promise<void | User> {
      throw new Error('Method not implemented.');
    }
    update(fieldsToChange: User, id: string): Promise<void> {
      throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<void> {
      throw new Error('Method not implemented.');
    }
  }

  return new UsersRepositorySpy();
};

const makePasswordComparerStub = () => {
  class PasswordComparerStub {
    async compare(plainText: string, encryptedText: string) {
      return true;
    }
  }
  return new PasswordComparerStub();
};

const makeFalsyPasswordComparerStub = () => {
  class PasswordComparerStub {
    async compare(plainText: string, encryptedText: string) {
      return false;
    }
  }
  return new PasswordComparerStub();
};

const makeTokenGeneratorStub = () => {
  class TokenGeneratorStub {
    async hash(payloadToHash: any) {
      return payloadToHash;
    }
  }
  return new TokenGeneratorStub();
};

const makeTokenGeneratorStubWithErrors = () => {
  class TokenGeneratorStub {
    async hash(payloadToHash: any) {
      throw new Error();
    }
  }
  return new TokenGeneratorStub();
};

const makeSut = (usersRepositorySpy, passwordComparerStub, tokenGeneratorStub) => {
  const loginUseCaseSpy = new LoginUseCase(
    usersRepositorySpy,
    passwordComparerStub,
    tokenGeneratorStub,
  );
  const sut = new LoginController(loginUseCaseSpy);
  return { sut, loginUseCaseSpy };
};

describe('Login Controller', () => {
  test('Should return 400 if no email is provided', async () => {
    const { sut } = makeSut(
      makeUsersRepositorySpy(),
      makePasswordComparerStub(),
      makeTokenGeneratorStub(),
    );
    const httpRequest = {
      body: { password: 'anyPassword' },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('email').message);
  });

  test('Should return 400 if no password is provided', async () => {
    const { sut } = makeSut(
      makeUsersRepositorySpy(),
      makePasswordComparerStub(),
      makeTokenGeneratorStub(),
    );
    const httpRequest = {
      body: { email: 'anyEmail@email.com' },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('password').message);
  });

  test('Should return 500 if no httpRequest is provided', async () => {
    const { sut } = makeSut(
      makeUsersRepositorySpy(),
      makePasswordComparerStub(),
      makeTokenGeneratorStub(),
    );
    const httpRequest = {};
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body.error).toBe(new InternalServerError().message);
  });

  test('Should return 500 when token generator throw error', async () => {
    const { sut } = makeSut(
      makeUsersRepositorySpy(),
      makePasswordComparerStub(),
      makeTokenGeneratorStubWithErrors(),
    );
    const httpRequest = {
      body: {
        email: 'anyEmail@email.com',
        password: 'anyPassword',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body.error).toBe(new InternalServerError().message);
  });

  test('Should return 401 when credentials are wrong', async () => {
    const { sut } = makeSut(
      makeUsersRepositorySpy(),
      makeFalsyPasswordComparerStub(),
      makeTokenGeneratorStub(),
    );
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
    const { sut } = makeSut(
      makeUsersRepositorySpy(),
      makePasswordComparerStub(),
      makeTokenGeneratorStub(),
    );
    const httpRequest = {
      body: {
        email: 'correctEmail@email.com',
        password: 'correctEmail',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.body).toHaveProperty('accessToken');
    expect(httpResponse.statusCode).toBe(200);
  });
});
