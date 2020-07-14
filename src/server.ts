/*
 * @Author: cacaudev
 * @Date: 2020-07-12 17:39:28
 * @Last Modified by: cacaudev
 * @Last Modified time: 2020-07-14 19:05:17
 */
import App from './app';
import { logger } from './utils';

const app = new App();

app.on('error', (err) => {
  logger.error(`Error on app: ${err}`);
  // TODO: Add response instance for error
});

const server = app.listen(3000, () => {
  logger.info('[SERVER] Running at http://localhost:3000');
});

export default server;
