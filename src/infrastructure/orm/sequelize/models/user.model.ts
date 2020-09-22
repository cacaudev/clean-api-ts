import { UserAttributes } from '@entities/User';
import { DataTypes, Model } from 'sequelize';
import dbConnection from '../sequelizeDriver';

class UserModel extends Model<UserAttributes> {
  id: string;
  email: string;
  name: string;
  surname: string;
  password: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

UserModel.init(
  {
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING(256),
      unique: true,
    },
    name: DataTypes.STRING(128),
    surname: DataTypes.STRING(128),
    password: DataTypes.STRING(288),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    sequelize: dbConnection,
    tableName: 'users',
    freezeTableName: true,
  },
);

export default UserModel;
