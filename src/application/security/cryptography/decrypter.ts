export interface Decrypter {
  decrypt: (textToDecrypt: string) => Promise<string>;
};
