import { IUsersRepository } from '@repositories/IUsersRepository';
import { User } from '@entities/User';
import { KnexCrudMethod } from './KnexCrudMethods';

// Users Mocked
const usersMocked = [
  {
    name: "Cacau",
    surname: "Something",
    email: "cacau@test.com.br",
    password: "123456",
    id: "7ec8ddfd-62db-40b9-8a1d-e1a2910a22ed"
  },
  {
    name: "User 2",
    surname: "Something",
    email: "user2@test.com.br",
    password: "12345678",
    id: "1ec8ddfd-62db-40b9-8a1d-e1a2910a22ed"
  },
];

class UserKnexRepository implements IUsersRepository {

  constructor() {}

  async findByEmail(email: string): Promise<User> {
    console.log('Finding user by email');

    const knexMethod = new KnexCrudMethod();
    await knexMethod.selectData('users',
      {
        fields: [],
        filters: [
          ['email', '=', email],
        ]
      }).then(users => {
        console.log('result ', users);
      });

    return usersMocked[0];
  }

  async findById(id: string): Promise<User> {
    console.log('Finding user by id');

    const knexMethod = new KnexCrudMethod();
    await knexMethod.selectData('users',
      {
        fields: [],
        filters: [
          ['id', '=', id],
        ]
      }).then(users => {
        console.log('result ', users);
      });

    return usersMocked[0];
  };

  async getAll(): Promise<User[]> {
    console.log('Getting all users');

    const knexMethod = new KnexCrudMethod();
    await knexMethod.selectData('users')
      .then(users => {
        console.log('result ', users);
      });

    return usersMocked;
  };

  async add(user: User): Promise<User> {
    console.log('Adding new user');

    const knexMethod = new KnexCrudMethod();
    await knexMethod.insertData('users', [user])
      .then(userId => {
        console.log('result ', userId);
      });

    return user;
  };

  async update(payload: User, userId: string): Promise<void> {
    console.log('Updating existing user');

    const knexMethod = new KnexCrudMethod();
    await knexMethod.insertData('users', {
      fields: payload,
      filters: [
        ['id', '=', userId]
      ]
    })
      .then(userId => {
        console.log('result ', userId);
      });
  };

  async delete(userId: string): Promise<void> {
    console.log('Deleting existing user');

    const knexMethod = new KnexCrudMethod();
    await knexMethod.deleteData('users', {
        fields: [],
        filters: [
          ['id', '=', userId]
        ]
      }).then(userId => {
          console.log('result ', userId);
      });
  };

  async loadAccountByEmail(email: string): Promise<User> {
    console.log('Getting user password with email', email);

    const knexMethod = new KnexCrudMethod();
    await knexMethod.selectData('users',
      {
        fields: ['id','email','password'],
        filters: [
          ['email', '=', email],
        ]
      }).then(users => {
        console.log('result ', users);
        return users;
      });

    //return usersMocked[1];
  };
}

export { UserKnexRepository };
