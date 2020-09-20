import { Logger } from '../providers/common/logger';
import { App } from './app';

const PORT = process.env.port || 3000;
const app = new App();
const log = Logger.getInstance().subject;

class WebServer {
  static startApp() {
    const onAppError = (error: NodeJS.ErrnoException): void => {
      if (error.syscall !== 'listen') throw error;
      switch (error.code) {
        case 'EACCES':
          console.log('Error on AppError: EACCES ', error);
          log.error(`Port ${PORT} requires elevated privileges.`);
          process.exit(1);
        case 'EADDRINUSE':
          console.log('Error on AppError: EADDRINUSE', error);
          log.error(`Port ${PORT} is already in use.`);
          process.exit(1);
        default:
          console.log('Error on AppError: EADDRINUSE', error);
          throw error;
      }
    };

    const onAppListening = (): void => {
      log.info(`[SERVER] Running at http://localhost:${PORT}`);
    };

    const server = app.listen(PORT, onAppListening);
    app.on('error', onAppError);
  }
}

export { WebServer };
