export interface IHarsher {
  hash: (plainText: string) => Promise<string>;
};
