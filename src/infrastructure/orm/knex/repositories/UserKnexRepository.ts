import { User } from '@entities/User';
import { IUsersRepository } from '@repositories/IUsersRepository';
import Knex from 'knex';
import { KnexCrudMethod } from '../KnexCrudMethods';
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
    const filters = [['email', '=', email]];

    const userFound = await this.dbInstance<User>('users')
      .select(fields)
      .where((builder) => {
        filters.forEach((condition) => {
          builder.where(...condition);
        });
      })
      .then((rows) => rows[0])
      .catch((error) => {
        console.log('Error on knex select query: ', error);
        return null;
      });

    return userFound;
  }

  async findById(id: string): Promise<User> {
    const knexMethod = new KnexCrudMethod();
    await knexMethod
      .selectData('users', {
        fields: [],
        filters: [['id', '=', id]],
      })
      .then((users) => {
        console.log('result ', users);
      });

    return usersMocked[0];
  }

  async getAll() {
    const knexMethod = new KnexCrudMethod();
    await knexMethod.selectData('users').then((users) => {
      console.log('result ', users);
    });

    return usersMocked;
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
    console.log('Updating existing user');

    const knexMethod = new KnexCrudMethod();
    await knexMethod
      .insertData('users', {
        fields: payload,
        filters: [['id', '=', userId]],
      })
      .then((userId) => {
        console.log('result ', userId);
      });
  }

  async delete(userId: string) {
    console.log('Deleting existing user');

    const knexMethod = new KnexCrudMethod();
    await knexMethod
      .deleteData('users', {
        fields: [],
        filters: [['id', '=', userId]],
      })
      .then((userId) => {
        console.log('result ', userId);
      });
  }
}

export { UserKnexRepository };
