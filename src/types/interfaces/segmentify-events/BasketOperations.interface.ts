import type { CommonEventParameters } from '../CommonEventParameters';
import type { TBASKET_OPERATIONS_STEPS } from '../../types';

/**
 * BasketOperations - This interface describes structure of BasketOperations event's attributes type.
 */
export interface BasketOperations extends CommonEventParameters {
  /**
   * The step of the basket operation. It can be 'add' or 'remove'.
   * @example
   * 'add', 'remove'
   * @type {TBASKET_OPERATIONS_STEPS}
   */
  step: typeof TBASKET_OPERATIONS_STEPS;
  /**
   * The id of the product.
   * @example
   * '1234567890'
   */
  productId: string;
  /**
   * The price of the product.
   * @example
   * 250.99
   */
  price?: number;
  /**
   * The quantity of the product.
   * @example
   * 1
   */
  quantity?: number;
}
