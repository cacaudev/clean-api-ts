/*
 * @Author: cacaudev
 * @Date: 2020-07-12 17:39:28
 * @Last Modified by: cacaudev
 * @Last Modified time: 2020-07-15 19:03:55
 */
import App from './app';
import { logger } from './loaders';

const PORT = process.env.port || 3000;
const app = new App();

const onAppError = (error: NodeJS.ErrnoException): void => {
  if (error.syscall !== 'listen') throw error;
  switch (error.code) {
    case 'EACCES':
      logger.error(`Port ${PORT} requires elevated privileges.`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(`Port ${PORT} is already in use.`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};
const onAppListening = (): void => {
  const serverAddress = server.address();
  logger.info(`[SERVER] Running at http://localhost:${serverAddress.port}`);
};

const server = app.listen(PORT, onAppListening);
app.on('error', onAppError);

export default server;
