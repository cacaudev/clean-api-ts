import { mainController } from '../../../composers/MainComposer';

describe('Main Controller', () => {

  test('Should return 200', async () => {
    const httpRequest = {};
    const httpResponse = await mainController.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(200);
  });
});
