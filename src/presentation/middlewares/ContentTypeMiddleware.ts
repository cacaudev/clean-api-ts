import { HttpClientResponse } from '@presentation/helpers/HttpClientResponse';
import { HttpRequest } from '@presentation/helpers/types';
import { IMiddleware } from '@presentation/interfaces/IMiddleware';

class ContentTypeMiddleware implements IMiddleware {
  async handle(httpRequest: HttpRequest) {
    try {
      const { contentType } = httpRequest;
      const validMediaType = 'application/json';

      if (contentType !== validMediaType) {
        return HttpClientResponse.invalidMediaType(validMediaType);
      }

      return HttpClientResponse.ok();
    } catch (error) {
      return HttpClientResponse.serverError();
    }
  }
}

export { ContentTypeMiddleware };
