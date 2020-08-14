import { IUsersRepository } from './implementations/IUsersRepository';
import { User } from '../entities/User';

export class UsersRepository implements IUsersRepository {
  private users: User[] = []; // Only mimic users table

  async findByEmail(email: string): Promise<User> {
    console.log('Finding user by email');

    const user = this.users.find(user => user.email === email);
    return user;
  }

  async findById(id: string): Promise<User> {
    console.log('Finding user by id');

    const user = this.users.find(user => user.id === id);
    return user;
  };

  async getAll(): Promise<User[]> {
    console.log('Getting all Users');
    return this.users;
  };

  async add(user: User): Promise<User> {
    console.log('Adding new user');
    this.users.push(user);

    return user;
  };

  async update(user: User): Promise<void> {
    console.log('Updating existing user');
  };

  async delete(id: string): Promise<void> {
    console.log('Deleting existing user');
  };
}
