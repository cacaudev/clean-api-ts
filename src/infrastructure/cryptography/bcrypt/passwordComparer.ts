import { IHashComparer } from "src/application/security/cryptography";
import { InternalServerError } from "@interfaces/helpers/errors";
import bcrypt from 'bcryptjs';

class PasswordComparer implements IHashComparer {

  async compare(plainPassword: string, encryptedPassword: string) {
    try {
      return bcrypt.compareSync(plainPassword, encryptedPassword);
    } catch (error) {
      throw new InternalServerError('Error ocurred on token decrypter.');
    }
  }
};

export { PasswordComparer };
