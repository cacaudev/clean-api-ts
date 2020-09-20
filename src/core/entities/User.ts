import { v4 as uuidv4 } from 'uuid';

export class User {
  public readonly id: string;
  public email: string;
  public name: string;
  public surname: string;
  public password: string;

  constructor(attributes: Partial<User>, id?: string) {
    Object.assign(this, attributes);
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
