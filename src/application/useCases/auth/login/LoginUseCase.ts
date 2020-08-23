import { LoginRequestDTO } from './LoginDTO';
import { IUseCase } from '@useCases/IUseCase';
import { IUsersRepository } from '@repositories/definitions/IUsersRepository';
import { IHashComparer, IHarsher } from '../../../security/cryptography';

class LoginUseCase implements IUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private hashComparer: IHashComparer,
    private harsher: IHarsher
  ) {};

  async execute (data: LoginRequestDTO) {
    console.log('Executing Login Use Case:');

    console.log('Search user with email...');
    const userAccountFound = await this.usersRepository.loadAccountByEmail(data.email);

    if (userAccountFound) {
      console.log('Checking if password matches from account found...');
      const isPasswordValid = await this.hashComparer.compare(data.password, userAccountFound.password);

      if (isPasswordValid) {
        console.log('Generating access token...');

        const accessToken = await this.harsher.hash(userAccountFound.id);

        console.log('Returning new access token');
        return accessToken;
      }

    } else {
      return null;
    }
  }
};

export { LoginUseCase };
