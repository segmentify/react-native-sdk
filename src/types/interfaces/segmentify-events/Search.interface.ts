import type { CommonEventParameters } from '../CommonEventParameters';

/**
 * SearchEventType - This interface describes structure of Search event's attributes type.
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
