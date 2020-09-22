import { Sequelize } from 'sequelize';
const sqliteConfig = require('./sqliteConfig');

/*

class SequelizeDriver implements IORMDriver {
  public database: Sequelize;

  constructor() {
    const sequelizeConfig = sqliteConfig['development'];
    this.initDB(sequelizeConfig);
    this.syncModels();
  }

  async initDB(databaseConfig: any) {
    console.log('initiating db');
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

  async syncModels() {
    await this.database.sync({ force: true });
  }

  async connectDB() {
    console.log('connecting db');
    this.database
      .authenticate()
      .then(() => console.log('Connected to Sequelize DB successfully'))
      .catch((error) => {
        throw error;
      });
  }
  async closeDB() {
    this.database.close();
    this.database = null;
  }
}

const sequelize = new SequelizeDriver();
const sequelizeDB = sequelize.database;

*/

const config = sqliteConfig['development'];

const sequelize = new Sequelize({
  dialect: config.dialect,
  storage: config.storage,
  logging: config.logging,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection established successfully.');
  })
  .catch((err) => {
    throw err;
  });

let dbConnection = sequelize;
export default dbConnection;
