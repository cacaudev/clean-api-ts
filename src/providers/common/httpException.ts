/*
interface ExceptionProperties {
  statusCode: number;
  message: string;
  error?: string | null;
}

class HttpException extends Error implements ExceptionProperties {
  statusCode: number;
  message: string;
  error?: string | null;

  constructor(props: ExceptionProperties) {
    super(props.message);
    this.message = props.message;
    this.statusCode = props.statusCode;
    this.error = props.error;
  }
}

export { HttpException };
*/
