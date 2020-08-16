import { LoginUseCase } from './LoginUseCase';
import { UsersRepository } from '../../../domain/repositories/implementations/UsersRepository';

const usersRepository = new UsersRepository();
const loginUseCase = new LoginUseCase(usersRepository);

describe('Login Use Case', () => {

  test('Should return access token', async () => {
    const data = {
      email: 'anyEmail@test.com',
      password: 'anyPassword'
    };

    const useCaseResult = await loginUseCase.execute(data);
     expect(useCaseResult).toHaveProperty('accessToken');
  });
});
