import { v4 as uuidv4 } from 'uuid';

export class User {
  public readonly id: string;
  public email: string;
  public name: string;
  public surname: string;
  public password: string;

  constructor(public attributes: Partial<User> = {}) {
    Object.assign(this, attributes);
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
