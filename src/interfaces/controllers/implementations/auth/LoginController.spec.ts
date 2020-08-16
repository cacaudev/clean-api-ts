import { loginComposer } from '../../../composers/auth/LoginComposer';
import {
  MissingParamError,
  InternalServerError,
  UnauthorizedError
} from '@interfaces/helpers/errors';

describe('Login Controller', () => {

  test('Should return 400 if no email is provided', async () => {
    const httpRequest = {
      body: { password: 'anyPassword'}
    };
    const httpResponse = await loginComposer.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('email').message);
  });


  test('Should return 400 if no password is provided', async () => {
    const httpRequest = {
      body: { email: 'anyEmail@email.com' }
    };
    const httpResponse = await loginComposer.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body.error).toBe(new MissingParamError('password').message);
  });

  test('Should return 500 if no httpRequest is provided', async () => {
    const httpRequest = {};
    const httpResponse = await loginComposer.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(500);
    expect(httpResponse.body.error).toBe(new InternalServerError().message);
  });

  test('Should return 400 if no httpRequest body is provided', async () => {
    const httpRequest = {
      body: {}
    };
    const httpResponse = await loginComposer.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });

  test('Should return 401 when credentials are wrong', async () => {
    const httpRequest = {
      body: {
        email: 'anyEmail@email.com',
        password: 'anyPassword'
      }
    };
    const httpResponse = await loginComposer.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(401);
    expect(httpResponse.body.error).toBe(new UnauthorizedError().message);
  });

  test('Should return 200 all parameters are present', async () => {
    const httpRequest = {
      body: {
        email: 'correctEmail@email.com',
        password: 'correctEmail'
      }
    };
    const httpResponse = await loginComposer.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(200);
  });
});
