class InternalServerError extends Error {

  constructor(parameterName?) {
    super('Internal Error');
    this.name = 'InternalServerError';
  }
}

export { InternalServerError };
