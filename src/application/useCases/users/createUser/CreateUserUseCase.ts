import { IUsersRepository } from "@repositories/IUsersRepository";
import { CreateUserRequestDTO } from './CreateUserDTO';
import { User } from '@entities/User';
import { IUseCase } from "@useCases/IUseCase";

class CreateUserUseCase implements IUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {};

  async execute(data: CreateUserRequestDTO) {
    console.log('Executing create user use case');

    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User(data);
    return user;

    //const newUser = await this.usersRepository.add(user);
    //return newUser;
  };
};

export { CreateUserUseCase };
