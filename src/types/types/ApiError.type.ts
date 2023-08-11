import { API_ERROR_ENUMS } from '..';
import type { TOV } from './util.types';

export type TError = TOV<typeof API_ERROR_ENUMS>;

/**
 * APIErrorType is used to define the type of the API error.
 * @example
 * {
 * "INVALID_TOKEN": {
 * "statusCode": 401,
 * "message": "Invalid token"
 * },
 */
export type APIErrorType<E> = {
  [Key in keyof E]: {
    statusCode: TError;
    message: string;
  };
};
