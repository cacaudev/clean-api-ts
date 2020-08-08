import { IUsersRepository } from '../IUsersRepository';
import { User } from '../../entities/User';

export class UsersRepository implements IUsersRepository {
  private users: User[] = []; // Only mimic users table

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find(user => user.id === id);

    return user;
  };

  async getAll(): Promise<User[]> {
    return this.users;
  };

  async add(user: User): Promise<User> {
    this.users.push(user);

    return user;
  };

  async update(user: User): Promise<void> {

  };

  async delete(id: string): Promise<void> {

  };
}
