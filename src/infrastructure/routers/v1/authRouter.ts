import Router from 'koa-router';

import { loginController } from "@interfaces/composers/auth/LoginComposer";
import { KoaControllerAdapter } from '@infrastructure/adapters/KoaControllerAdapter';

const authRouter = new Router({ prefix: '/auth' });

authRouter
  .post('/login', KoaControllerAdapter.adapt(loginController));

export { authRouter };
