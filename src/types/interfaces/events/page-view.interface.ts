import type { SegmentifyBase } from '../segmentify-event-base.interface';
import type { TPAGE_TYPES } from '../../types';

/**
 * @name PageViewEventType
 * @description This interface describes structure of PageView event's attributes type.
 * @param {TPAGE_TYPES | String} category: The category of the page view event. It can be 'Home Page', 'Product Page', 'Category Page', 'Search Page', 'Basket Page', 'Checkout Page' or some custom category.
 * @param {String} subCategory: The sub category of the page view event.
 * @returns PageViewEventType
 * @example
 * const event: PageViewEventType = {
 *  category: 'Category Page',
 *  subCategory: 'Shoes'
 * }
 */
export interface PageViewEventType extends SegmentifyBase {
  category: typeof TPAGE_TYPES | String;
  subCategory?: String;
}
