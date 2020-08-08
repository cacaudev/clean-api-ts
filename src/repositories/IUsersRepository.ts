import { User } from "@entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;

  findById(id: string): Promise<User>;

  getAll(): Promise<User[]>;

  add(user: User): Promise<User>;

  update(user: User): Promise<void>;

  delete(id: string): Promise<void>;
};
