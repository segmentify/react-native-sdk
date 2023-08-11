import { API_ERROR_ENUMS } from '../enums';

type APIErrorType = keyof typeof API_ERROR_ENUMS;

/**
 * @typedef
 * @name APIErrorType
 * @description APIErrorType is used to define the type of the API error.
 * @example
 * "INVALID_TOKEN"
 */

export type ResponseStatusCodeType = APIErrorType | 'SUCCESS';
