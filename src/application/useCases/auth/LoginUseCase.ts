import { ILoginRequest } from "./ILogin";
import { IUseCase } from "@useCases/IUseCase";
import { IUsersRepository } from "@repositories/definitions/IUsersRepository";

class LoginUseCase implements IUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) {};

  async execute (data: ILoginRequest) {
    console.log('Executing Login Use Case:');
    console.log('Search user with email...');
    console.log('Checking if password matches...')
    console.log('Generating access token...');
  }
};

export { LoginUseCase };
