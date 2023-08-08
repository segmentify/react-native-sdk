import type { CommonEventParameters } from '../CommonEventParameters';
import type { TBANNER_OPERATIONS_TYPES } from '../../types';

/**
 * @typedef
 * @name BannerOperations
 * @description BannerOperations type is used to define the type of the banner operations.
 * @property {TBANNER_OPERATIONS_TYPES} type - The type of the banner operation. It can be 'impression', 'click' or 'update'.
 * @property {string} title - The title of the banner.
 * @property {string} group - The group of the banner.
 * @property {number} order - The order of the banner in the group.
 * @property {string} [productId] - The unique id of the product.
 * @property {string} [category] - category of the product. It should be hierarchical like 'Electronics > Mobile Phones > Smartphones'.
 * @property {string} [brand] - The brand of the product.
 * @property {string} [label] - The label of the product.
 * @type {BannerOperations}
 * @example
 *  {
 *   "type": "impression",
 *   "title": "My Awesome Banner Title",
 *   "group": "Categorized_Banner_Group",
 *   "order": 1,
 *   "productId": "1234567890",
 *   "category": "Electronics > Mobile Phones > Smartphones",
 *   "brand": "Apple",
 *   "label": "iPhone 12 Pro Max"
 *  }
 */
export interface BannerOperations extends CommonEventParameters {
  /**
   * The type of the banner operation.
   * @example
   * 'impression', 'click' or 'update'
   */
  type: typeof TBANNER_OPERATIONS_TYPES;
  /**
   * The title of the banner.
   * @example
   * 'My Awesome Banner Title'
   */
  title: string;
  /**
   * The group of the banner.
   * @example
   * 'Categorized_Banner_Group
   */
  group: string;
  /**
   * The order of the banner in the group.
   * @example
   * 1
   */
  order: number;
  /**
   * The unique id of the product.
   * @example
   * '1234567890'
   */
  productId?: string;
  /**
   * category of the product. It should be hierarchical like 'Electronics > Mobile Phones > Smartphones'.
   *
   * @example
   * 'Electronics > Mobile Phones > Smartphones'
   */
  category?: string;
  /**
   * The brand of the product.
   * @example
   * 'Apple'
   */
  brand?: string;
  /**
   * The label of the product.
   * @example
   * 'iPhone 12 Pro Max'
   */
  label?: string;
}
