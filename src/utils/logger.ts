/*
 * @Author: cacaudev
 * @Date: 2020-07-14 16:03:12
 * @Last Modified by: cacaudev
 * @Last Modified time: 2020-07-14 16:49:38
 */
import winston from "winston";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "debug",
      handleExceptions: true,
      format: winston.format.simple(),
    }),
  ],
  exitOnError: false,
});

const loggerStream = {
  write: (message: string) => {
    logger.info(message.substring(0, message.lastIndexOf("\n")));
  },
};

export { logger, loggerStream };
