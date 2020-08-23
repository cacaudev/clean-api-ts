export interface Encrypter {
  encrypt: (textToEncrypt: string) => Promise<string>;
};
