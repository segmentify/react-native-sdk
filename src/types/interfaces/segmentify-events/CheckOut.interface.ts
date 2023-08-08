import type { CommonEventParameters } from '../CommonEventParameters';
import type { CheckoutProduct, TCHECKOUT_STEPS } from '../../types';

/**
 * @typedef
 * @name CheckOut
 * @description
 * CheckOut is a type that describes the parameters that checkout event takes.
 * @property {TCHECKOUT_STEPS} step The step of the checkout.
 * @property {number} totalPrice The total price of the products.
 * @property {string} [orderNo] The order number of the products.
 * @property {string} [cartUrl] The url of the cart.
 * @property {CheckoutProduct[]} products The products in the cart.
 * @example
 * {
 *  step: 'customer',
 *  totalPrice: 250.99,
 *  orderNo: '1234567890',
 *  cartUrl: 'https://www.example.com/cart/:cartId',
 *  products: [
 *   { productId: '1234567890', price: 250.99, quantity: 1, currency: 'TRY' }
 *  ],
 * }
 */
export interface CheckOut extends CommonEventParameters {
  /**
   * The step of the checkout..
   * @example
   * 'customer', 'view-basket', 'payment-info', 'purchase'
   */
  step: typeof TCHECKOUT_STEPS;
  /**
   * The total price of the products.
   * @example
   * 250.99
   */
  totalPrice: number;
  /**
   * The order number of the products.
   * @example
   * '1234567890'
   * @default ''
   */
  orderNo?: string;
  /**
   * The url of the cart.
   * @example
   * 'https://www.example.com/cart/:cartId'
   * @default ''
   */
  cartUrl?: string;
  /**
   * The products in the cart.
   * @example
   * [
   * { productId: '1234567890', price: 250.99, quantity: 1, currency: 'TRY' }
   * ]
   */
  products: CheckoutProduct[];
}
