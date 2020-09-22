import dbConnection from '../sequelizeDriver';
import UserModel from './user.model';

const models = {
  UserModel,
};

Object.values(models).forEach((model: any) => {
  if (model.associate) {
    model.associate(models);
  }
});

const db = {
  ...models,
  dbConnection,
};

export default db;
