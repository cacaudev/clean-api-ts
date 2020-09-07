import Koa from 'koa';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import morgan from 'koa-morgan';
import compress from 'koa-compress';

import { bodyParserMiddleware } from '.';
import { Logger } from '@infrastructure/providers/common/logger';

const loadMiddlewares = (app: Koa) => {
  app.use(cors());
  app.use(helmet());
  app.use(morgan('dev', { stream: Logger.getInstance().stream }));
  app.use(compress());
  app.use(bodyParserMiddleware());
};

export { loadMiddlewares };
