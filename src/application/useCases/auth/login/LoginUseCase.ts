import { ILoginUseCase } from './ILoginUseCase';
import { IUseCase } from '@useCases/IUseCase';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { IHashComparer, IHasher } from '@security/cryptography';

class LoginUseCase implements ILoginUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private passwordComparer: IHashComparer,
    private tokenGenerator: IHasher
  ) {}

  async execute(data: { email: string; password: string }) {
    const userAccountFound = await this.usersRepository.findByEmail(data.email);

    if (userAccountFound) {
      const isPasswordValid = await this.passwordComparer.compare(
        data.password,
        userAccountFound.password
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
