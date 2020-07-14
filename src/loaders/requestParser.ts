/*
 * @Author: cacaudev
 * @Date: 2020-07-14 18:21:45
 * @Last Modified by: cacaudev
 * @Last Modified time: 2020-07-14 19:05:49
 */

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

/**
 * HTTP request body will be stored in ctx.request.body from Koa
 */
const bodyParserMiddleware = () => bodyParser(defaultParserOptions);

export { bodyParserMiddleware };
