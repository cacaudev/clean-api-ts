
class UnauthorizedError extends Error {

  constructor(parameterName) {
    super('Unauthorized');
    this.name = 'UnauthorizedError';
  }
}

export { UnauthorizedError };
