import Koa from 'koa';
import { loadMiddlewares, loadRoutes } from '@infrastructure/middlewares';

class App extends Koa {
  constructor() {
    super();
    this.proxy = true;
    this.silent = this.env !== 'development';
    this.applyMiddlewares();
    this.applyRouters();
  }

  private applyMiddlewares() {
    loadMiddlewares(this);
  }

  private applyRouters() {
    loadRoutes(this);
  }
}

export { App };
