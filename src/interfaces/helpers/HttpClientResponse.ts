import StatusCodes from './types/statusCodes';
import { HttpResponseType } from './types/HttpResponse';
import { UnauthorizedError, InternalServerError } from './errors';

class HttpClientResponse {
  static ok (body?: any): HttpResponseType {
    return {
      statusCode: StatusCodes.OK,
      type: 'application/json',
      body
    };
  }

  static created (body: any): HttpResponseType {
    return {
      statusCode: StatusCodes.CREATED,
      type: 'application/json',
      body
    };
  }

  static badRequest (error: any): HttpResponseType {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      type: 'application/json',
      body: { error: error.message }
    }
  }

  static unauthorizedError (): HttpResponseType {
    return {
      statusCode: StatusCodes.UNAUTHORIZED,
      type: 'application/json',
      body: {
         error: new UnauthorizedError().message
      }
    }
  }

  static serverError (): HttpResponseType {
    return {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      type: 'application/json',
      body: {
        error: new InternalServerError().message
      }
    }
  }
}

export { HttpClientResponse };
