import { v4 as uuidv4 } from 'uuid';

interface UserAttributes {
  readonly id: string;
  email: string;
  name: string;
  surname: string;
  password: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
class User implements UserAttributes {
  public readonly id: string;
  public email: string;
  public name: string;
  public surname: string;
  public password: string;
  public readonly createdAt: Date;
  public readonly updatedAt: Date;

  constructor(attributes: Partial<User>, id?: string) {
    Object.assign(this, attributes);
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User, UserAttributes };
