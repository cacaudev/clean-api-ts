import { IUsersRepository } from "@repositories/IUsersRepository";
import { CreateUserRequestDTO } from './CreateUserDTO';
import { User } from '@entities/User';
import { IUseCase } from '@useCases/IUseCase';
import { IEncrypter } from 'src/application/security/cryptography';

class CreateUserUseCase implements IUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private passwordEncrypter: IEncrypter
  ) {};

  async execute(data: CreateUserRequestDTO) {
    const { name, surname, email, password } = data;

    const userAlreadyExists = await this.usersRepository.findByEmail(email);
     if (userAlreadyExists) {
      return null;
    }

    const payload = { name, surname, email, password: null };
    payload.password = await this.passwordEncrypter.encrypt(password);

    const user = new User(payload);
    const newUser = await this.usersRepository.add(user);

    console.log('newUser',newUser);
    return newUser;
  };
};

export { CreateUserUseCase };
