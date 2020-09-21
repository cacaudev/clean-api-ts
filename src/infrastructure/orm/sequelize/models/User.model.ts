import Sequelize, { Model } from 'sequelize';
import { SequelizeDriver } from '../sequelizeDriver';

class User extends Model {
  public id: string;
  public email: string;
  public name: string;
  public surname: string;
  public password: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;
}

User.init(
  {
    id: Sequelize.STRING,
    email: Sequelize.STRING,
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    password: Sequelize.STRING,
  },
  {
    sequelize: SequelizeDriver.getInstance(),
    freezeTableName: true,
  },
);

export default User;
