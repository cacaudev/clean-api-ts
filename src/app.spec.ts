import supertest from 'supertest';
import http from 'http';
import App from './app';

describe('Integration App Test', () => {
  test('[GET] /', (done) => {
    const app = new App();
    const apptest = supertest(http.createServer(app.callback()));
    apptest.get('/').expect(200);
    done();
  });
});
