import type { CommonEventParameters } from '../CommonEventParameters';
import type { CheckoutProduct, TCHECKOUT_STEPS } from '../../types';

/**
 * @name CheckOutEventType
 * @description This interface describes structure of CheckOut event's attributes type.
 * @param {TCHECKOUT_STEPS} step: The step of the checkout. It can be 'customer', 'view-basket', 'payment-info' or 'purchase'.
 * @param {Number} totalPrice: The total price of the products.
 * @param {String} orderNo: The order number of the products.
 * @param {String} cartUrl: The url of the cart.
 * @param {CheckoutProduct[]} products: The products in the cart.
 * @returns CheckOutEventType
 * @example
 * const event: CheckOutEventType = {
 *  step: 'customer',
 *  totalPrice: 250.99,
 *  orderNo: '1234567890',
 *  cartUrl: 'https://www.example.com/cart',
 *  products: [
 *   { productId: '1234567890', price: 250.99, quantity: 1, currency: 'TRY' }
 *  ]
 * }
 */
export interface CheckOut extends CommonEventParameters {
  step: typeof TCHECKOUT_STEPS;
  totalPrice: Number;
  orderNo?: String;
  cartUrl?: String;
  products: CheckoutProduct[];
}
