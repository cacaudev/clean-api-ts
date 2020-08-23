export interface IHasher {
  hash: (payloadToHash: any) => Promise<string>;
};
