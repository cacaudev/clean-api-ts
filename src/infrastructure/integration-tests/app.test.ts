import http from 'http';
import supertest from 'supertest';
import { App } from '../webserver/app';

describe('Integration App Test', () => {
  test('[GET] /', (done) => {
    const app = new App();
    const apptest = supertest(http.createServer(app.callback()));
    apptest.get('/').expect(200);
    done();
  });
});
