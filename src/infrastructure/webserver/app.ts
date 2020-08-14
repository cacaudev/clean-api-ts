import Koa from 'koa';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import morgan from 'koa-morgan';
import compress from 'koa-compress';
import { bodyParserMiddleware } from 'src/infrastructure/middlewares/requestParser';
import { Logger } from '@providers/common/logger';
import { mainRouter } from '../routers/implementations/mainRouter';


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
    this.use(morgan('dev', { stream: Logger.getInstance().stream }));
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
    this.use(mainRouter.routes());
    this.use(mainRouter.allowedMethods());
  }
}

export { App };
