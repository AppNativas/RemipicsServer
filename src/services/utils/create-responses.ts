import { ErrorResponse, SuccessResponse } from "../types/responses";

export const createSuccessResponse = <T>(data: T): SuccessResponse<T> => ({
  success: true,
  data,
});

export const createErrorResponse = (message: string): ErrorResponse => ({
  success: false,
  error: {
    message,
  },
});
