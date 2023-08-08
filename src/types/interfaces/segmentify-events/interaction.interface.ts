import type { CommonEventParameters } from '../CommonEventParameters';
import type { TINTERACTION_TYPES } from '../../types';

/**
 * @typedef
 * @name Interaction
 * @description
 * Interaction is a type that describes the parameters that interaction event takes.
 * @property {TINTERACTION_TYPES} type The type of the interaction event. It can be 'impression', 'click', 'search' or 'widget-view'.
 * @property {string} instanceId The instance id of the interaction event.
 * @property {string} interactionId The interaction id of the interaction event.
 * @example
 * {
 *  type: 'impression',
 *  instanceId: '1234567890',
 *  interactionId: '1234567890',
 * }
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
