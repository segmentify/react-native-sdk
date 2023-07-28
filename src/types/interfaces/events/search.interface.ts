import type { SegmentifyBase } from '../segmentify-event-base.interface';

/**
 * @name SearchEventType
 * @description This interface describes structure of Search event's attributes type.
 * @param {String} query: The query of the search event.
 * @returns SearchEventType
 * @example
 * const event: SearchEventType = {
 *  query: 'shoes'
 * }
 */
export interface SearchEventType extends SegmentifyBase {
  query?: String;
}
