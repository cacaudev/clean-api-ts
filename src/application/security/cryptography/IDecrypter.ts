export interface IDecrypter {
  decrypt: (textToDecrypt: string) => Promise<any>;
};
