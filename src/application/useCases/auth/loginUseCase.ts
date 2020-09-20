import { IUsersRepository } from '@repositories/IUsersRepository';
import { IHashComparer, IHasher } from '@security/cryptography';
import { IUseCase } from '../IUseCase';

interface LoginRequestDTO {
  email: string;
  password: string;
}

class LoginUseCase implements IUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private passwordComparer: IHashComparer,
    private tokenGenerator: IHasher,
  ) {}

  async execute(data: LoginRequestDTO) {
    const userAccountFound = await this.usersRepository.findByEmail(data.email);

    if (userAccountFound) {
      const isPasswordValid = await this.passwordComparer.compare(
        data.password,
        userAccountFound.password,
      );

      if (isPasswordValid) {
        const accessToken = await this.tokenGenerator.hash(userAccountFound.id);
        return accessToken;
      }
    }

    return;
  }
}

export { LoginUseCase };
