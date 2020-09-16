import { User } from '@entities/User';
import { KnexOrmDriver } from './knexDriver';
class KnexCrudMethod {
  constructor() {}

  async insertData(tableName: string, data: any) {
    const knexDatabase = KnexOrmDriver.getInstance();

    return await knexDatabase(tableName)
      .insert(data)
      .then((response) => response)
      .catch((error) => console.log('Error on knex select query: ', error));
  }

  async selectData(tableName: string, options = { fields: [], filters: [] }) {
    const { fields, filters } = options;
    const knexDatabase = KnexOrmDriver.getInstance();

    return await knexDatabase<User>(tableName)
      .select(fields)
      .where((builder) => {
        filters.forEach((condition) => {
          builder.where(...condition);
        });
        console.log('builder', builder);
      })
      .then((rows) => {
        console.log('rows', rows);
        return rows;
      })
      .catch((error) => console.log('Error on knex select query: ', error));
  }

  async updateData(tableName: string, options = { fields: [], filters: [] }) {
    const { fields, filters } = options;
    const knexDatabase = KnexOrmDriver.getInstance();

    return await knexDatabase(tableName)
      .where((builder) => {
        filters.forEach((condition) => {
          builder.where(...condition);
        });
      })
      .update(fields)
      .then((data) => data)
      .catch((error) => console.log('Error on knex update query: ', error));
  }

  async deleteData(tableName: string, options = { fields: [], filters: [] }) {
    const { fields, filters } = options;
    const knexDatabase = KnexOrmDriver.getInstance();

    return await knexDatabase(tableName)
      .where((builder) => {
        filters.forEach((condition) => {
          builder.where(...condition);
        });
      })
      .del()
      .then((data) => data)
      .catch((error) => console.log('Error on knex delete query: ', error));
  }
}

export { KnexCrudMethod };
