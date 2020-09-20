import { User } from '@entities/User';
import { IUsersRepository } from '@repositories/IUsersRepository';
import Knex from 'knex';
import { KnexOrmDriver } from '../knexDriver';

const usersMocked = [
  {
    name: 'Cacau',
    surname: 'Something',
    email: 'cacau@test.com.br',
    password: '123456',
    id: '7ec8ddfd-62db-40b9-8a1d-e1a2910a22ed',
  },
  {
    name: 'User 2',
    surname: 'Something',
    email: 'user2@test.com.br',
    password: '12345678',
    id: '1ec8ddfd-62db-40b9-8a1d-e1a2910a22ed',
  },
];

class UserKnexRepository implements IUsersRepository {
  private dbInstance: Knex;

  constructor() {
    this.dbInstance = KnexOrmDriver.getInstance();
  }

  async findByEmail(email: string): Promise<User | void> {
    const fields = ['id', 'email', 'password'];
    const userFound = await this.dbInstance<User>('users')
      .select(fields)
      .where({ email })
      .then((rows) => rows[0])
      .catch((error) => {
        console.log('Error on knex select query: ', error);
        return null;
      });
    return userFound;
  }

  async findById(id: string): Promise<void | User> {
    throw new Error('Method not implemented.');
  }

  async getAll(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async add(user: User) {
    const newUser = await this.dbInstance<User>('users')
      .returning('*')
      .insert(user)
      .then((response) => response)
      .catch((error) => {
        console.log('Error on knex select query: ', error);
        return null;
      });

    return newUser;
  }

  async update(payload: User, userId: string) {
    throw new Error('Method not implemented.');
  }

  async delete(userId: string) {
    throw new Error('Method not implemented.');
  }
}

export { UserKnexRepository };
