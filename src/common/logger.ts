import winston, { createLogger, format, transports } from 'winston';

const errorStackTracerFormat = format((info) => {
  if (info.meta && info.meta instanceof Error) {
    info.message = `${info.message} ${info.meta.stack}`;
  }
  return info;
});

class Logger {
  private static instance: Logger;
  private loggerSubject: winston.Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
      Logger.instance.loggerSubject = createLogger({
        transports: [
          new transports.Console({
            level: 'debug',
            handleExceptions: true,
            format: format.combine(
              format.splat(), // Necessary to produce the 'meta' property
              errorStackTracerFormat(),
              format.simple()
            ),
          }),
        ],
        exitOnError: false,
      });
    }
    return Logger.instance;
  }

  public get stream() {
    return {
      write: (message: string) => {
        this.subject.info(message.substring(0, message.lastIndexOf('\n')));
      },
    };
  }

  public get subject() {
    return this.loggerSubject;
  }
}

export { Logger };
