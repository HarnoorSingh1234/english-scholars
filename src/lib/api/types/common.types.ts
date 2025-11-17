// Common API Types

export interface ApiSuccessResponse<T> {
  success: boolean;
  data: T;
}

export interface ApiErrorResponse {
  detail: Array<{
    loc: (string | number)[];
    msg: string;
    type: string;
  }>;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface ApiError extends Error {
  response?: {
    data: ApiErrorResponse;
    status: number;
  };
}
