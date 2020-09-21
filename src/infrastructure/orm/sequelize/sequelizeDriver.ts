import { Sequelize } from 'sequelize';
import { IORMDriver } from '../IOrmDriver';
import sqliteConfig from './sqliteConfig';

class SequelizeDriver implements IORMDriver {
  public static instance: SequelizeDriver;
  public database: Sequelize;

  private constructor() {}

  public static async getInstance() {
    if (!SequelizeDriver.instance) {
      const newSequelizeDriver = new SequelizeDriver();
      const sequelizeConfig = sqliteConfig['development'];
      await newSequelizeDriver.initDB(sequelizeConfig);
      await newSequelizeDriver.connectDB();
      SequelizeDriver.instance = newSequelizeDriver;
    }

    return SequelizeDriver.instance.database;
  }

  public async syncModels() {}

  async initDB(databaseConfig: any) {
    console.log('databaseConfig', databaseConfig);

    try {
      this.database = new Sequelize({
        database: databaseConfig.databaseName,
        dialect: databaseConfig.dialect,
        storage: databaseConfig.storage,
      });
    } catch (error) {
      throw error;
    }
  }
  async connectDB() {
    this.database
      .authenticate()
      .then(() => console.log('Connected to Sequelize DB successfully'))
      .catch((error) => {
        throw error;
      });
  }
  async closeDB() {
    SequelizeDriver.instance = null;
    this.database.close();
    this.database = null;
  }
}

export { SequelizeDriver };
