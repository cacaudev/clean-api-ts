import { v4 as uuidv4 } from 'uuid';

export class User {
  public readonly id: string;
  public email: string;
  public name: string;
  public surname: string;
  public password: string;

  constructor(attributes: Omit<User, 'id'>, id?: string) {
    Object.assign(this, attributes);
    if (!id) {
      this.id = uuidv4();
    }
  }
}
