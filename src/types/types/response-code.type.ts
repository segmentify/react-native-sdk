import { API_ERROR_ENUMS } from '../enums';

export type ResponseStatusCodeType = keyof typeof API_ERROR_ENUMS | 'SUCCESS';
