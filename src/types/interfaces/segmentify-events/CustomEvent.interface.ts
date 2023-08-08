import type { CommonEventParameters } from '../CommonEventParameters';

/**
 * Custom Event - This interface describes structure of Custom event's attributes type.
 */
export interface Custom extends CommonEventParameters {
  /**
   * The type of the custom event.
   * @example
   * 'your_custom_event_type'
   */
  type: string;
}
