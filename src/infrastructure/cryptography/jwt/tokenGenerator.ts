import { IHasher } from "src/application/security/cryptography";
import { InternalServerError } from "@interfaces/helpers/errors";
import jwt from 'jsonwebtoken';

const JWTSECRET = 'somesecret';

class AuthTokenGenerator implements IHasher {
  async hash(payloadToHash: any) {
    try {
      const token = jwt.sign(
        { id: payloadToHash.id },
        JWTSECRET,
        { algorithm: 'HS256', expiresIn: '7d' }
      );
      return token;
    } catch (error) {
      throw new InternalServerError('Failed to generate user auth token');
    }
  }
};

export { AuthTokenGenerator };
