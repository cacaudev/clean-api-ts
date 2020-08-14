import StatusCodes from './types/statusCodes';
import { HttpResponse } from './types/HttpResponse';

class ClientResponse {

  static ok (body?: any): HttpResponse {
    return {
      statusCode: StatusCodes.OK,
      type: 'application/json',
      body
    };
  }

  static created (body: any): HttpResponse {
    return {
      statusCode: StatusCodes.CREATED,
      type: 'application/json',
      body
    };
  }

  static badRequest (error: object): HttpResponse {
    return {
      statusCode: StatusCodes.BAD_REQUEST,
      type: 'application/json',
      body: { error }
    }
  }

  static unauthorizedError (): HttpResponse {
    return {
      statusCode: StatusCodes.UNAUTHORIZED,
      type: 'application/json',
      body: {
         //error: new ServerError().message
         error: 'Unauthorized action'
      }
    }
  }

  static serverError (): HttpResponse {
    return {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      type: 'application/json',
      body: {
        //error: new ServerError().message
        error: 'Server error'
      }
    }
  }
}

export { ClientResponse };
