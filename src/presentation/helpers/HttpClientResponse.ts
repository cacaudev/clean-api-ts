import { InternalServerError, InvalidFieldError, UnauthorizedError } from './errors';
import { HttpResponse } from './types/HttpResponse';
import statusCodes from './types/statusCodes';

class HttpClientResponse {
  static ok(body?: any): HttpResponse {
    return {
      statusCode: statusCodes.OK,
      type: 'application/json',
      body,
    };
  }

  static created(body: any): HttpResponse {
    return {
      statusCode: statusCodes.CREATED,
      type: 'application/json',
      body,
    };
  }

  static badRequest(error: any): HttpResponse {
    return {
      statusCode: statusCodes.BAD_REQUEST,
      type: 'application/json',
      body: { error: error.message },
    };
  }

  static conflictError(error: any): HttpResponse {
    return {
      statusCode: statusCodes.CONFLICT,
      type: 'application/json',
      body: { error: new InvalidFieldError(error).message },
    };
  }

  static unauthorizedError(): HttpResponse {
    return {
      statusCode: statusCodes.UNAUTHORIZED,
      type: 'application/json',
      body: {
        error: new UnauthorizedError().message,
      },
    };
  }

  static invalidMediaType(mediaType: string): HttpResponse {
    return {
      statusCode: statusCodes.UNSUPPORTED_MEDIA_TYPE,
      type: 'application/json',
      body: {
        error: `Content-type sent is not supported. Supported media type: ${mediaType}`,
      },
    };
  }

  static serverError(): HttpResponse {
    return {
      statusCode: statusCodes.INTERNAL_SERVER_ERROR,
      type: 'application/json',
      body: {
        error: new InternalServerError().message,
      },
    };
  }
}

export { HttpClientResponse };
