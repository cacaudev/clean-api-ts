import winston from 'winston';

class Logger {
  private static instance: Logger;
  private loggerSubject: winston.Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
      Logger.instance.loggerSubject = winston.createLogger({
        transports: [
          new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            format: winston.format.simple(),
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
