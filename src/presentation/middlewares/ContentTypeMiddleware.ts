import { IMiddleware } from '@presentation/interfaces/IMiddleware';
import { HttpClientResponse } from '@presentation/helpers/HttpClientResponse';
import { HttpRequest } from '@presentation/helpers/types';

class ContentTypeMiddleware implements IMiddleware {
  handle = async (httpRequest: HttpRequest) => {
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
  };
}

export { ContentTypeMiddleware };
