import type { CommonEventParameters } from '../CommonEventParameters';
import type { TBASKET_OPERATIONS_STEPS } from '../../types';

/**
 * @name BasketOperationsEventType
 * @description This interface describes structure of BasketOperations event's attributes type.
 * @param {TBASKET_OPERATIONS_STEPS} step: The step of the basket operation. It can be 'add' or 'remove'.
 * @param {String} productId: The id of the product.
 * @param {Number} price: The price of the product.
 * @param {Number} quantity: The quantity of the product.
 * @returns BasketOperationsEventType
 * @example
 * const event: BasketOperationsEventType = {
 *   step: 'add',
 *   price: 250.99,
 *   quantity: 1,
 *   productId: '1234567890'
 * }
 */
export interface BasketOperations extends CommonEventParameters {
  step: typeof TBASKET_OPERATIONS_STEPS;
  productId: String;
  price?: Number;
  quantity?: Number;
}
