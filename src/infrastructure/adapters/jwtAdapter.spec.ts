import jwt from 'jsonwebtoken';
import { JwtAdapter } from './jwtAdapter';

jest.mock('jsonwebtoken', () => ({
  async sign(): Promise<string> {
    return 'correct_ciphertext';
  },

  async verify(): Promise<string> {
    return 'correct_plain_text';
  },
}));

const throwError = () => {
  throw new Error();
};

const makeSut = () => {
  return new JwtAdapter('secret');
};

describe('Jwt Adapter', () => {
  describe('Sign Function', () => {
    test('Should call sign with correct arguments without options', async () => {
      const sut = makeSut();
      const signSpy = jest.spyOn(jwt, 'sign');

      await sut.encrypt('any_payload');
      expect(signSpy).toHaveBeenCalledWith('any_payload', 'secret', null);
    });

    test('Should call sign with correct arguments with options', async () => {
      const sut = makeSut();
      sut.setAlgorithm('HS256');
      sut.setExpirationPeriod('7d');
      const signSpy = jest.spyOn(jwt, 'sign');

      await sut.encrypt('any_payload');
      expect(signSpy).toHaveBeenCalledWith('any_payload', 'secret', {
        algorithm: 'HS256',
        expiresIn: '7d',
      });
    });

    test('Should return encrypted text on success', async () => {
      const sut = makeSut();
      const textEncrypted = await sut.encrypt('any_payload');

      expect(textEncrypted).toBe('correct_ciphertext');
    });

    test('Should throw if sign resulted on error', async () => {
      const sut = makeSut();
      jest.spyOn(jwt, 'sign').mockImplementationOnce(throwError);

      const promise = sut.encrypt('any_payload');
      await expect(promise).rejects.toThrow();
    });
  });

  describe('Verify Function', () => {
    test('Should call verify with correct arguments without options', async () => {
      const sut = makeSut();
      const verifySpy = jest.spyOn(jwt, 'verify');

      await sut.decrypt('text_encrypted');
      expect(verifySpy).toHaveBeenCalledWith('text_encrypted', 'secret', null);
    });

    test('Should call verify with correct arguments with options', async () => {
      const sut = makeSut();
      sut.setAlgorithm('HS256');
      const verifySpy = jest.spyOn(jwt, 'verify');

      await sut.decrypt('text_encrypted');
      expect(verifySpy).toHaveBeenCalledWith('text_encrypted', 'secret', {
        algorithms: ['HS256'],
      });
    });

    test('Should return decrypted text on success', async () => {
      const sut = makeSut();
      const textEncrypted = await sut.decrypt('text_encrypted');

      expect(textEncrypted).toBe('correct_plain_text');
    });

    test('Should throw if verify resulted on error', async () => {
      const sut = makeSut();
      jest.spyOn(jwt, 'verify').mockImplementationOnce(throwError);

      const promise = sut.decrypt('any_payload');
      await expect(promise).rejects.toThrow();
    });
  });
});
