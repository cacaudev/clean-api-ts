import Koa from 'koa';
import cors from '@koa/cors';
import helmet from 'koa-helmet';
import morgan from 'koa-morgan';
import compress from 'koa-compress';

import { bodyParserMiddleware } from '.';
import { Logger } from '@infrastructure/providers/common/logger';

const loadersMiddleware = (app: Koa) => {
   /**
     * Enable Cross Origin Resource Sharing to all origins by default
     */
    app.use(cors());
    /**
     * Basic node security
     */
    app.use(helmet());
    /**
     * Main app logger
     */
    app.use(morgan('dev', { stream: Logger.getInstance().stream }));
    /**
     * Compress middleware for Koa
     */
    app.use(compress());
    /**
     * Parse request payload
     */
    app.use(bodyParserMiddleware());
};

export { loadersMiddleware };
