import { IDecrypter } from '@security/cryptography';
import { InternalServerError } from '@presentation/helpers/errors';
import { JwtAdapter } from '@infrastructure/adapters/jwtAdapter';

const JWTSECRET = 'somesecret';

class TokenDecrypter implements IDecrypter {
  async decrypt(token: string) {
    try {
      const jwtAdapter = new JwtAdapter(JWTSECRET);
      jwtAdapter.setAlgorithm('HS256');

      const dataDecrypted = await jwtAdapter.decrypt(token);
      return dataDecrypted;
    } catch (error) {
      throw new InternalServerError('Failed to authenticate user token');
    }
  }
}

export { TokenDecrypter };
