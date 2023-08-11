import type { CommonEventParameters } from '../CommonEventParameters';

/**
 * @typedef
 * @name CustomEvent
 * @description
 * Custom is a type that describes the parameters that custom event takes.
 * @property {string} type The type of the custom event.
 * @example
 *  {
 *   type: 'your_custom_event_type',
 *  }
 */
export interface Custom extends CommonEventParameters {
  /**
   * The type of the custom event.
   * @example
   * 'your_custom_event_type'
   */
  type: string;
}
