import { uuid } from 'uuidv4';

export class User {

  public readonly id: string;

  public email: number;
  public name: string;
  public surname: string;
  public password: string;

  constructor(attributes: Omit<User, 'id'>, id?: string) {
    Object.assign(this, attributes);

    if (!id) {
      this.id = uuid();
    }
  }
}
