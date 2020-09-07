import { MainController } from './MainController';

const makeSut = () => {
  const sut = new MainController();
  return {
    sut,
  };
};

describe('Main Controller', () => {
  test('Should return 200', async () => {
    const { sut } = makeSut();
    const httpRequest = {};
    const httpResponse = await sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(200);
  });
});
