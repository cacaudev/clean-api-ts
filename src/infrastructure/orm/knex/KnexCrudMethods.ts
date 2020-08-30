import knexDatabase from './connection';

class KnexCrudMethod {
  constructor() {}

  async insertData(tableName:string , data: any) {
    return await knexDatabase(tableName)
      .insert(data)
      .then(response => response)
      .finally(() => knexDatabase.destroy());
  };

  async selectData(tableName:string, options = { fields: [], filters: [] }) {
    const { fields, filters } = options;

    console.log('fields',fields);
    console.log('filters',filters);

    return await knexDatabase<User>(tableName)
      .select(fields)
      .where(builder => {
        filters.forEach(condition => {
          builder.where(...condition)
        })
        console.log('builder',builder);
      })
      .then(rows => {
        console.log('rows',rows);
        return rows;
      })
      .catch(error => console.log('Error on knex select query: ', error));
      //.finally(() => knexDatabase.destroy());
  };

  async updateData(tableName:string, options = { fields: [], filters: [] }) {
    const { fields, filters } = options;

    return await knexDatabase(tableName)
      .where(builder => {
        filters.forEach(condition => {
          builder.where(...condition)
        })
      })
      .update(fields)
      .then(data => data)
      .finally(() => knexDatabase.destroy());
  };

  async deleteData(tableName:string, options = { fields: [], filters: [] }) {
    const { fields, filters } = options;

    return await knexDatabase(tableName)
    .where(builder => {
      filters.forEach(condition => {
        builder.where(...condition)
      })
    })
    .del()
    .then(data => data)
    .finally(() => knexDatabase.destroy());
  };
};

export { KnexCrudMethod };
