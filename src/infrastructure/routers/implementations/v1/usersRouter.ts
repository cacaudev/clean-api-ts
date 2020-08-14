/*import Router from 'koa-router';

import { createUserController } from "@interfaces/composers/CreateUserComposer";
import { KoaControllerAdapter } from 'src/interfaces/controllers/KoaControllerAdapter';

const usersRouter = new Router({ prefix: '/user' });

usersRouter
  //.post('/', createUserController.handle);
  .post('/', KoaControllerAdapter.adapt(createUserController));

export { usersRouter };
*/
