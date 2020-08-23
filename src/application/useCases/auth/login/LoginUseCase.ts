import { LoginRequestDTO } from './LoginDTO';
import { IUseCase } from '@useCases/IUseCase';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { IHashComparer, IHasher } from '../../../security/cryptography';

class LoginUseCase implements IUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private passwordComparer: IHashComparer,
    private tokenGenerator: IHasher
  ) {};

  async execute (data: LoginRequestDTO) {
    console.log('Executing Login Use Case:');

    console.log('Search user with email...');
    const userAccountFound = await this.usersRepository.loadAccountByEmail(data.email);
    console.log('userAccountFound',userAccountFound);

    if (userAccountFound) {
      console.log('Checking if password matches from account found...');
      const isPasswordValid = await this.passwordComparer.compare(data.password, userAccountFound.password);

      if (isPasswordValid) {
        console.log('Generating access token...');

        const accessToken = await this.tokenGenerator.hash(userAccountFound.id);

        console.log('Returning new access token');
        return accessToken;
      }
    }

    return null;
  }
};

export { LoginUseCase };
