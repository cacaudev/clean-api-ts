import Router from 'koa-router';

import { loginComposer } from "@interfaces/composers/auth/LoginComposer";
import { KoaControllerAdapter } from '@infrastructure/adapters/KoaControllerAdapter';

const authRouter = new Router({ prefix: '/auth' });

authRouter
  .post('/login', KoaControllerAdapter.adapt(loginComposer));

export { authRouter };
