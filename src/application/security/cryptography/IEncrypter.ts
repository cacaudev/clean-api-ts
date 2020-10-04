export interface IEncrypter {
  encrypt: (textToEncrypt: any) => Promise<string>;
}
