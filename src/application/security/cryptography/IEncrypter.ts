export interface IEncrypter {
  encrypt: (textToEncrypt: string) => Promise<string>;
};
