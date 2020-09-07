import { IEncrypter } from '@security/cryptography';
import { InternalServerError } from '@presentation/helpers/errors';
import config from '../../config/environment';
import bcrypt from 'bcryptjs';

class PasswordEncrypter implements IEncrypter {
  async encrypt(plainPassword: string) {
    try {
      return bcrypt.hashSync(plainPassword, Number(config.BCRYPT_COST));
    } catch (error) {
      throw new InternalServerError('Error ocurred on token decrypter.');
    }
  }
}

export { PasswordEncrypter };
