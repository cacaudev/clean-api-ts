type HttpRequest = {
  body: any,
  query: any,
  params: any
};

type HttpResponse = {
  status: number,
  type: string,
  body: any
};

interface IHttpClientController {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
};

export {
  HttpRequest,
  HttpResponse,
  IHttpClientController
};
