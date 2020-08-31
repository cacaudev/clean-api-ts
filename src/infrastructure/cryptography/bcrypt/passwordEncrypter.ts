import { IEncrypter } from 'src/application/security/cryptography';
import { InternalServerError } from '@interfaces/helpers/errors';
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
};

export { PasswordEncrypter };
