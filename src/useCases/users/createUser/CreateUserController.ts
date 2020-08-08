import { CreateUserUseCase } from './CreateUserUseCase';
import { Context } from 'koa';

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ) {}

  handle = async (ctx: Context) => {
    const { name, surname, email, password } = ctx.request.body;

    try {
      const newUser = await this.createUserUseCase.execute({
        name,
        surname,
        email,
        password
      });

      ctx.status = 201;
      ctx.type = 'application/json';
      ctx.body = newUser;
      return;

    } catch (error) {
      ctx.status = 400;
      ctx.type = 'application/json';
      ctx.body = { message: error.message || 'Unexpected error' };
      return;
    }
  }
};

