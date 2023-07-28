import { API_ERROR_ENUMS } from '../';
import type { TOV } from './util.types';

export type TError = TOV<typeof API_ERROR_ENUMS>;

export type APIErrorType<E> = {
  [Key in keyof E]: {
    statusCode: TError;
    message: string;
  };
};
