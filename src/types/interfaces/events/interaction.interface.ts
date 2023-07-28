import type { SegmentifyBase } from '../segmentify-event-base.interface';
import type { TINTERACTION_TYPES } from '../../types';

/**
 * @name InteractionEventType
 * @description This interface describes structure of Interaction event's attributes type.
 * @param {String} type: The type of the interaction event. It can be 'impression', 'click', 'search' or 'widget-view'.
 * @param {String} instanceId: The instance id of the interaction event.
 * @param {String} interactionId: The interaction id of the interaction event.
 * @returns InteractionEventType
 * @example
 * const event: InteractionEventType = {
 *  type: 'click',
 *  instanceId: '1234567890',
 *  interactionId: '0987654321'
 * }
 */
export interface InteractionEventType extends SegmentifyBase {
  type: typeof TINTERACTION_TYPES;
  instanceId: String;
  interactionId: String;
}
