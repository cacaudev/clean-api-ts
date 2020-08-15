class MissingParamError extends Error {
  constructor (parameterName) {
    super(`Missing parameter: ${parameterName}`)
    this.name = 'MissingParamError';
  }
}

export { MissingParamError };
