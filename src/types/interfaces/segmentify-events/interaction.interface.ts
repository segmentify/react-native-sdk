import type { CommonEventParameters } from '../CommonEventParameters';
import type { TINTERACTION_TYPES } from '../../types';

/**
 *  This interface describes structure of Interaction event's attributes type.
 */
export interface Interaction extends CommonEventParameters {
  /**
   * The type of the interaction event. It can be 'impression', 'click', 'search' or 'widget-view'.
   * @example
   * 'impression', 'click', 'search', 'widget-view'
   * @default ""
   */
  type: typeof TINTERACTION_TYPES;
  /**
   * The instance id of the interaction event.
   * @example
   * '1234567890'
   * @default ""
   */
  instanceId: string;
  /**
   * The interaction id of the interaction event.
   * @example
   * '1234567890'
   * @default ""
   */
  interactionId: string;
}
