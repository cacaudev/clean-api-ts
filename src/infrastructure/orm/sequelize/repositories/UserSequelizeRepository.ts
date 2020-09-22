import { User } from '@entities/User';
import { IUsersRepository } from '@repositories/IUsersRepository';
import db from '../models';

class UserSequelizeRepository implements IUsersRepository {
  async findByEmail(email: string) {
    const fields = ['id', 'email', 'password'];
    try {
      return await db.UserModel.findOne({
        where: { email },
        attributes: fields,
        raw: true,
      });
    } catch (error) {
      throw error;
    }
  }
  async findById(id: string) {
    try {
      return await db.UserModel.findByPk(id);
    } catch (error) {
      throw error;
    }
  }
  getAll(): Promise<void | User[]> {
    throw new Error('Method not implemented.');
  }
  async add(user: User) {
    try {
      return await db.UserModel.create(user);
    } catch (error) {
      throw error;
    }
  }
  update(fieldsToChange: User, id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { UserSequelizeRepository };
