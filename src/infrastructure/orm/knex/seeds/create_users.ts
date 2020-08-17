import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('users').insert([
    {
      id: 'f77241457f68ds4fdsfds',
      email: 'johnmail@mail.com',
      name: 'john',
      surname: 'doe',
      password: '2f854f5dsf4dsfdsfds'
    },
    {
      id: '458d4s3fds457f68ds4fds',
      email: 'janemail2@mail.com',
      name: 'jane',
      surname: 'doe',
      password: '2f854f5dsf4dsfdsfds'
    },
  ]);
}
