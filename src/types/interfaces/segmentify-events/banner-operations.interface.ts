import type { CommonEventParameters } from '../CommonEventParameters';
import type { TBANNER_OPERATIONS_TYPES } from '../../types';

/**
 * @name BannerOperationsEventType
 * @description This interface describes structure of BannerOperations event's attributes type.
 * @param {TBANNER_OPERATIONS_TYPES} type: The type of the banner operation. It can be 'impression', 'click' or 'update'.
 * @param {String} title: The title of the banner.
 * @param {String} group: The group of the banner.
 * @param {Number} order: The order of the banner in the group.
 * @param {String} productId: The unique id of the product.
 * @param {String} category: The category of the product. It should be hierarchical like 'Electronics > Mobile Phones > Smartphones'.
 * @param {String} brand: The brand of the product.
 * @param {String} label: The label of the product.
 * @returns BannerOperationsEventType
 * @example
 * const event: BannerOperationsEventType = {
 *  type: 'impression',
 *  title: 'Banner Title',
 *  group: 'Banner Group',
 *  order: 1,
 *  productId: '1234567890',
 *  category: 'Electronics > Mobile Phones > Smartphones',
 *  brand: 'Apple',
 *  label: 'iPhone 12 Pro Max'
 * }
 */
export interface BannerOperationsEventType extends CommonEventParameters {
  type: typeof TBANNER_OPERATIONS_TYPES;
  title: String;
  group: String;
  order: Number;
  productId?: String;
  category?: String;
  brand?: String;
  label?: String;
}
