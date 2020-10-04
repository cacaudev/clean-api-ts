import { IHasher } from '@security/cryptography';
import { InternalServerError } from '@presentation/helpers/errors';
import { JwtAdapter } from '../../adapters/jwtAdapter';

const JWTSECRET = 'somesecret';

class AuthTokenGenerator implements IHasher {
  async hash(objectToEncypt: any) {
    try {
      const jwtAdapter = new JwtAdapter(JWTSECRET);
      jwtAdapter.setAlgorithm('HS256');
      jwtAdapter.setExpirationPeriod('7d');

      const payload = {
        id: objectToEncypt.id,
      };

      const token = await jwtAdapter.encrypt(payload);
      return token;
    } catch (error) {
      console.log('error', error);
      throw new InternalServerError('Failed to generate user auth token');
    }
  }
}

export { AuthTokenGenerator };
