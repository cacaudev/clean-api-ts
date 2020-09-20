import { HttpClientResponse } from '@presentation/helpers/httpClientResponse';
import { HttpRequest } from '@presentation/helpers/types';
import { IMiddleware } from '@presentation/interfaces/IMiddleware';

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
