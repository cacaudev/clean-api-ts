import { App } from './app';
import { Logger } from '@common/logger';

const PORT = process.env.port || 3000;
const app = new App();
const log = Logger.getInstance().subject;

const onAppError = (error: NodeJS.ErrnoException): void => {
  if (error.syscall !== 'listen') throw error;
  switch (error.code) {
    case 'EACCES':
      console.log('Error on AppError: EACCES ', error);
      log.error(`Port ${PORT} requires elevated privileges.`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.log('Error on AppError: EADDRINUSE', error);
      log.error(`Port ${PORT} is already in use.`);
      process.exit(1);
      break;
    default:
      console.log('Error on AppError: EADDRINUSE', error);
      throw error;
  }
};
const onAppListening = (): void => {
  const serverAddress = server.address();
  log.info(`[SERVER] Running at http://localhost:${serverAddress.port}`);
};

const server = app.listen(PORT, onAppListening);
app.on('error', onAppError);

export default server;
