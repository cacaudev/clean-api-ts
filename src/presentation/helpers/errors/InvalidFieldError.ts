class InvalidFieldError extends Error {
  constructor(parameterName) {
    super(`Invalid Field: ${parameterName}`);
    this.name = 'InvalidFieldError';
  }
}

export { InvalidFieldError };
