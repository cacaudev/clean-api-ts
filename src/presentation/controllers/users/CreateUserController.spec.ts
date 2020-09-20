import { User } from '@entities/User';
import {
  InternalServerError,
  InvalidFieldError,
  MissingParamError,
} from '@presentation/helpers/errors';
import { CreateUserUseCase } from '@useCases/users/createUserUseCase';
import { CreateUserController } from './createUserController';

const userExample = {
  name: 'Cacau',
  surname: 'Dev',
  password: '123456',
  email: 'test@email.com',
};

const makeEncrypterStub = () => {
  class EncrypterStub {
    async encrypt(plainPassword: string) {
      return plainPassword;
    }
  }
  return new EncrypterStub();
};

const makeUsersRepositorySpy = () => {
  class UsersRepositorySpy {
    async findByEmail(email: string): Promise<void | User> {
      return;
    }
    findById(id: string): Promise<void | User> {
      throw new Error('Method not implemented.');
    }
    getAll(): Promise<void | User[]> {
      throw new Error('Method not implemented.');
    }
    async add(user: User): Promise<void | User> {
      return new User(userExample);
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

const makeUsersRepositorySpyWithErrors = () => {
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
    async add(user: User): Promise<void | User> {
      return new User(userExample);
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

const makeSut = (encrypterStub, usersRepositorySpy) => {
  const createUserUseCase = new CreateUserUseCase(usersRepositorySpy, encrypterStub);
  const sut = new CreateUserController(createUserUseCase);
  return { sut };
};

describe('Create User Controller', () => {
  test('Should return 400 if no name is provided', async () => {
    const { sut } = makeSut(makeEncrypterStub(), makeUsersRepositorySpy());
    const httpRequest = {
      body: {
        surname: 'anyName',
        email: 'anyMail',
        password: 'anyPassword',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('name').message);
  });

  test('Should return 400 if no surname is provided', async () => {
    const { sut } = makeSut(makeEncrypterStub(), makeUsersRepositorySpy());
    const httpRequest = {
      body: {
        name: 'anyName',
        email: 'anyMail',
        password: 'anyPassword',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('surname').message);
  });

  test('Should return 400 if no email is provided', async () => {
    const { sut } = makeSut(makeEncrypterStub(), makeUsersRepositorySpy());
    const httpRequest = {
      body: {
        name: 'anyName',
        surname: 'anyName',
        password: 'anyPassword',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('email').message);
  });

  test('Should return 400 if no password is provided', async () => {
    const { sut } = makeSut(makeEncrypterStub(), makeUsersRepositorySpy());
    const httpRequest = {
      body: {
        name: 'anyName',
        surname: 'anyName',
        email: 'anyMail',
      },
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('password').message);
  });

  test('Should return 500 if no httpRequest is provided', async () => {
    const { sut } = makeSut(makeEncrypterStub(), makeUsersRepositorySpy());
    const httpRequest = {};
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body.error).toBe(new InternalServerError().message);
  });

  test('Should return 409 if all parameters are correct and but already has user with the same email passed', async () => {
    const { sut } = makeSut(makeEncrypterStub(), makeUsersRepositorySpyWithErrors());
    const httpRequest = {
      body: userExample,
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(409);
    expect(httpResponse.body.error).toBe(
      new InvalidFieldError('Email already in use.').message,
    );
  });

  test('Should return 201 if all parameters are correct and no user has the same email passed', async () => {
    const { sut } = makeSut(makeEncrypterStub(), makeUsersRepositorySpy());
    const httpRequest = {
      body: userExample,
    };
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(201);
  });
});
