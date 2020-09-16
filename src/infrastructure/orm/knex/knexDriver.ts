import { IORMDriver } from '@presentation/interfaces/IOrmDriver';
import { default as knex, default as Knex } from 'knex';
import sqliteConfig from './sqliteConfig';

class KnexOrmDriver implements IORMDriver {
  private static instance: KnexOrmDriver;
  public database: Knex;

  private constructor() {}

  public static getInstance() {
    if (!KnexOrmDriver.instance) {
      const newKnexConnection = new KnexOrmDriver();
      const knexConfig = sqliteConfig;
      newKnexConnection.initDB(knexConfig);
      KnexOrmDriver.instance = newKnexConnection;
    }

    return KnexOrmDriver.instance.database;
  }

  async initDB(databaseConfiguration: any) {
    this.database = knex(databaseConfiguration);
  }
  public async closeConnection(): Promise<void> {
    this.database.destroy();
    this.database = null;
  }
  public async connectDB(): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { KnexOrmDriver };
