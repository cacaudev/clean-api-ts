import { User } from '@entities/User';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | void>;

  findById(id: string): Promise<User | void>;

  getAll(): Promise<User[]>;

  add(user: User): Promise<User>;

  update(fieldsToChange: User, id: string): Promise<void>;

  delete(id: string): Promise<void>;
};
