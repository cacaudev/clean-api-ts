import { IUsersRepository } from "@repositories/IUsersRepository";
import { CreateUserRequestDTO } from './CreateUserDTO';
import { User } from '@entities/User';
import { IUseCase } from "@useCases/IUseCase";

class CreateUserUseCase implements IUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {};

  async execute(data: CreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
     if (userAlreadyExists) {
      return null;
    }

    const user = new User(data);

    const newUser = await this.usersRepository.add(user);
    console.log('newUser',newUser);
    return newUser;
  };
};

export { CreateUserUseCase };
