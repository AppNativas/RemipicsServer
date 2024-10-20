export type SuccessResponse<T> = {
  success: true;
  data: T;
};

export type ErrorResponse = {
  success: false;
  error: {
    message: string;
  };
};

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
