export interface HashComparer {
  compare: (plainText: string, encryptedText: string) => Promise<boolean>;
};
