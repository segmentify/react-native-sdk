import type { CommonEventParameters } from '../CommonEventParameters';
import type { TBASKET_OPERATIONS_STEPS } from '../../types';

type BasketOperationsSteps = typeof TBASKET_OPERATIONS_STEPS;
/**
 * @typedef
 * @name BasketOperations
 * @description
 * BasketOperations is a type that describes the parameters that basket operations event takes.
 * @property {string} step The step of the basket operation. It can be 'add' or 'remove'. {@link TBASKET_OPERATIONS_STEPS}
 * @property {string} productId The id of the product.
 * @property {number} price The price of the product.
 * @property {number} quantity The quantity of the product.
 * @example
 *  {
 *   step: 'add',
 *   productId: '1234567890',
 *   price: 250.99,
 *   quantity: 1,
 *  }
 */

export interface BasketOperations extends CommonEventParameters {
  /**
   * The step of the basket operation. It can be 'add' or 'remove'.
   * @example
   * 'add', 'remove'
   */
  step: BasketOperationsSteps;
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
