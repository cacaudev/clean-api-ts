interface IORMDriver {
  initDB(databaseConfiguration: any): Promise<void>;
  connectDB(): Promise<void>;
  closeConnection(): Promise<void>;
}

export { IORMDriver };
