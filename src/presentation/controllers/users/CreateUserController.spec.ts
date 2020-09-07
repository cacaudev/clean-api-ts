//import { createUserComposer } from '@interfaces/composers/users/CreateUserComposer';
//import { MissingParamError, InternalServerError } from '@interfaces/helpers/errors';

describe.skip('Create User Controller', () => {
  /*
  test('Should return 400 if no name is provided', async () => {
    const httpRequest = {
      body: {
        surname: 'anyName',
        email: 'anyMail',
        password: 'anyPassword'
      }
    };
    const httpResponse = await createUserComposer.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('name').message)
  });

  test('Should return 400 if no surname is provided', async () => {
    const httpRequest = {
      body: {
        name: 'anyName',
        email: 'anyMail',
        password: 'anyPassword'
      }
    };
    const httpResponse = await createUserComposer.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('surname').message)
  });

  test('Should return 400 if no email is provided', async () => {
    const httpRequest = {
      body: {
        name: 'anyName',
        surname: 'anyName',
        password: 'anyPassword'
      }
    };
    const httpResponse = await createUserComposer.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('email').message)
  });

  test('Should return 400 if no password is provided', async () => {
    const httpRequest = {
      body: {
        name: 'anyName',
        surname: 'anyName',
        email: 'anyMail',
      }
    };
    const httpResponse = await createUserComposer.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('password').message)
  });

  test('Should return 500 if no httpRequest is provided', async () => {
    const httpRequest = {};
    const httpResponse = await createUserComposer.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body.error).toBe(new InternalServerError().message)
  });*/
});
