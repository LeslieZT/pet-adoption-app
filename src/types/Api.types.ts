export interface ResponseApi<T> {
  status: number;
  data?: T;
  error?: ErrorResponse;
}

export interface ErrorResponse {
  message: string;
}
