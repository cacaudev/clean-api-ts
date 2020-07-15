/*
 * @Author: cacaudev
 * @Date: 2020-07-12 17:14:02
 * @Last Modified by: cacaudev
 * @Last Modified time: 2020-07-15 18:16:59
 */

import Koa from 'koa';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import compress from 'koa-compress';
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
     * Enable Cross Origin Resource Sharing to all origins by default
     */
    this.use(cors());
    /**
     * Basic node security
     */
    this.use(helmet());
    /**
     * Main app logger
     */
    this.use(loggerMiddleware());
    /**
     * Compress middleware for Koa
     */
    this.use(compress());
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
