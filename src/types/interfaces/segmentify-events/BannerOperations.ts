import type { CommonEventParameters } from '../CommonEventParameters';
import type { TBANNER_OPERATIONS_TYPES } from '../../types';

/**
 * This interface describes structure of BannerOperations event's attributes type.
 */
export interface BannerOperationsEventType extends CommonEventParameters {
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
