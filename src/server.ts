/*
 * @Author: cacaudev
 * @Date: 2020-07-12 17:39:28
 * @Last Modified by: cacaudev
 * @Last Modified time: 2020-07-12 18:47:53
 */
import App from './app';

const app = new App();

app.on('error', (err) => {
  // console.log('Error on app', err);
});

const server = app.listen(3000, () => {
  // console.log('[SERVER] Running at http://localhost:3000');
});

export default server;
