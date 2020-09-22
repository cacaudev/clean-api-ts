import { User } from '@entities/User';
import { IUsersRepository } from '@repositories/IUsersRepository';
import { UserModel } from '../models/User.model';

class UserSequelizeRepository implements IUsersRepository {
  async findByEmail(email: string): Promise<void | User> {
    const fields = ['id', 'email', 'password'];
    await UserModel.findOne({
      where: { email },
      attributes: fields,
      raw: true,
    })
      .then((result) => result)
      .catch((error) => {
        throw error;
      });
  }
  async findById(id: string): Promise<void | User> {
    await UserModel.findByPk(id)
      .then((result) => result)
      .catch((error) => {
        throw error;
      });
  }
  getAll(): Promise<void | User[]> {
    throw new Error('Method not implemented.');
  }
  async add(user: User): Promise<void | User> {
    await UserModel.create(user)
      .then((result) => result)
      .catch((error) => {
        throw error;
      });
  }
  update(fieldsToChange: User, id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { UserSequelizeRepository };
