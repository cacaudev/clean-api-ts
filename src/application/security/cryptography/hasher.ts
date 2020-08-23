export interface Harsher {
  hash: (plainText: string) => Promise<string>;
};
