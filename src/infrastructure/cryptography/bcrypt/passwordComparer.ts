import { IHashComparer } from '@security/cryptography';
import { InternalServerError } from '@presentation/helpers/errors';
import bcrypt from 'bcryptjs';

class PasswordComparer implements IHashComparer {
  async compare(plainPassword: string, encryptedPassword: string): Promise<boolean> {
    try {
      return bcrypt.compareSync(plainPassword, encryptedPassword);
    } catch (error) {
      throw new InternalServerError('Error ocurred on token decrypter.');
    }
  }
}

export { PasswordComparer };
