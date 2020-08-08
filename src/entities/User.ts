interface UserInterface {
  email: number;
  name?: string;
  surname?: string;
}

class User extends Model {
  public readonly id!: number;
  public email!: number;
  public name: string;
  public surname: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export { User, UserInterface };
