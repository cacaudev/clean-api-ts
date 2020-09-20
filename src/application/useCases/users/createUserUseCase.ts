import { User } from '@entities/User';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { IEncrypter } from '@security/cryptography';
import { IUseCase } from '@useCases/IUseCase';

interface CreateUserRequestDTO {
  name: string;
  surname: string;
  email: string;
  password: string;
}

class CreateUserUseCase implements IUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private passwordEncrypter: IEncrypter,
  ) {}

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

    return newUser;
  }
}

export { CreateUserUseCase };
