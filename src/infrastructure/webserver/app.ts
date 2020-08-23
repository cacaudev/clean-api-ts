import Koa from 'koa';
import {
  loadersMiddleware,
  loadRoutesMiddleware
} from '@infrastructure/middlewares';

class App extends Koa {
  constructor() {
    super();
    this.proxy = true;
    this.silent = this.env !== 'development';
    this.applyMiddlewares();
    this.applyRouters();
  }

  private applyMiddlewares() {
    loadersMiddleware(this);
  }

  private applyRouters() {
    loadRoutesMiddleware(this);
  }
}

export { App };
