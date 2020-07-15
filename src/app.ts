/*
 * @Author: cacaudev
 * @Date: 2020-07-12 17:14:02
 * @Last Modified by: cacaudev
 * @Last Modified time: 2020-07-15 18:16:59
 */

import Koa from 'koa';
import { bodyParserMiddleware, loggerMiddleware } from './loaders';
import { baseRouter } from './api/routers';

class App extends Koa {
  constructor() {
    super();
    this.proxy = true;
    this.silent = this.env !== 'development';
    this.applyMiddlewares();
    this.applyRouters();
  }

  private applyMiddlewares() {
    /**
     * Main app logger
     */
    this.use(loggerMiddleware());
    /**
     * Parse request payload
     */
    this.use(bodyParserMiddleware());
  }

  private applyRouters() {
    /**
     * Load API routes
     */
    this.use(baseRouter.routes());
    this.use(baseRouter.allowedMethods());
  }
}

export default App;
