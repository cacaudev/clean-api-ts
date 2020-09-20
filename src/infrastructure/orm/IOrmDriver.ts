interface IORMDriver {
  initDB(databaseConfiguration: any): Promise<void>;
  connectDB(): Promise<void>;
  closeDB(): Promise<void>;
}

export { IORMDriver };
