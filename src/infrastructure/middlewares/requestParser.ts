import bodyParser from 'koa-bodyparser';

type bodyParserDTO = {
  enableTypes: string[];
  encoding?: string;
  jsonLimit?: string;
  formLimit?: string;
  textLimit?: string;
  onError?: (error: Error) => Error;
  parsedMethods: string[];
};

const defaultParserOptions = {
  enableTypes: ['json'],
  jsonLimit: '5mb',
  // TODO: Add response instance for MEDIA_NOT_SUPPORTED
  /*onError: (error) => {
    error.status = 413; // Payload too big
    error.name = "BAD_REQUEST";
    throw error;
  },*/
  parsedMethods: ['POST', 'PUT', 'PATCH', 'DELETE'],
};

const bodyParserMiddleware = () => bodyParser(defaultParserOptions);

export { bodyParserMiddleware };
