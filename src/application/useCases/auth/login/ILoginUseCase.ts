namespace ILoginUseCase {
  export type Params = {
    email: string;
    password: string;
  };
}

export interface ILoginUseCase {
  execute(data: ILoginUseCase.Params): Promise<any>;
}
