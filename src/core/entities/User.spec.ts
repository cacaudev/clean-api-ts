import { User } from './User';

describe('User Entity', () => {
  test('Should create User Entity', () => {
    const userMock = {
      name: 'John',
      surname: 'Smith',
      email: 'email@test.com',
      password: 'passwordExample',
    };
    const user = new User(userMock);
    expect(user).toHaveProperty('id');
    expect(user.name).toBe(userMock.name);
    expect(user.surname).toBe(userMock.surname);
    expect(user.email).toBe(userMock.email);
    expect(user.password).toBe(userMock.password);
  });
});
