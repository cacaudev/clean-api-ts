/*
 * @Author: cacaudev
 * @Date: 2020-07-14 16:03:12
 * @Last Modified by: cacaudev
 * @Last Modified time: 2020-07-14 19:05:55
 */
import winston from 'winston';
import morgan from 'koa-morgan';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      format: winston.format.simple(),
    }),
  ],
  exitOnError: false,
});

const loggerStream = {
  write: (message: string) => {
    logger.info(message.substring(0, message.lastIndexOf('\n')));
  },
};

const loggerMiddleware = () => morgan('tiny', { stream: loggerStream });

export { logger, loggerMiddleware };
