import type { SegmentifyBase } from '../segmentify-event-base.interface';

/**
 * @name CustomEventType
 * @description This interface describes structure of Custom event's attributes type.
 * @param {String} type: The type of the custom event.
 * @param {Map<String, Object>} params: The parameters of the custom event.
 * @returns CustomEventType
 * @example
 * const event: CustomEventType = {
 *  type: 'custom-event',
 *  params: 'custom-event-params'
 * }
 */
export interface CustomEventType extends SegmentifyBase {
  type: String;
  params?: Map<String, Object>;
}
