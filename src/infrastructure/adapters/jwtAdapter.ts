import { IDecrypter, IEncrypter } from '@security/cryptography';
import jwt from 'jsonwebtoken';

class JwtAdapter implements IEncrypter, IDecrypter {
  private algorithm: any;
  private expirationPeriod: string | number;

  constructor(private readonly secret: string) {
    this.secret = secret;
  }

  setAlgorithm(algorithm: any) {
    this.algorithm = algorithm;
  }

  setExpirationPeriod(period: string | number) {
    this.expirationPeriod = period;
  }

  async encrypt(payloadToHash: any = {}) {
    let options = null;
    if (this.algorithm) {
      options = Object.assign({}, options, { algorithm: this.algorithm });
    }
    if (this.expirationPeriod) {
      options = Object.assign({}, options, { expiresIn: this.expirationPeriod });
    }

    const cipherText = jwt.sign(payloadToHash, this.secret, options);
    return cipherText;
  }
  async decrypt(textToDecrypt: string): Promise<any> {
    let options = null;
    if (this.algorithm) {
      options = Object.assign({}, options, { algorithms: [this.algorithm] });
    }

    const plainText = jwt.verify(textToDecrypt, this.secret, options);
    return plainText;
  }
}

export { JwtAdapter };
