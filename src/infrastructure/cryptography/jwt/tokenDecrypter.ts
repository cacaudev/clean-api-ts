import { IDecrypter } from '@security/cryptography';
import { InternalServerError } from '@presentation/helpers/errors';
import jwt from 'jsonwebtoken';

const JWTSECRET = 'somesecret';

class TokenDecrypter implements IDecrypter {
  async decrypt(token: string) {
    try {
      const dataDecrypted = jwt.verify(token, JWTSECRET, {
        algorithms: ['HS256'],
      });
      return dataDecrypted;
    } catch (error) {
      throw new InternalServerError('Failed to authenticate user token');
    }
  }
}

export { TokenDecrypter };
