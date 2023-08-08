import type { CommonEventParameters } from '../CommonEventParameters';

/**
 * @typedef
 * @name Search
 * @description Search type is used to define the type of the search event.
 * @property {string} [query] - The query of the search event.
 * @type {Search}
 * @example
 * {
 *  "query": "iphone"
 * }
 */
export interface Search extends CommonEventParameters {
  /**
   * The query of the search event.
   * @example
   * 'iphone'
   * @default ''
   */
  query?: string;
}
