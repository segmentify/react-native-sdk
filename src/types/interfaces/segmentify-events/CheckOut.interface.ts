import type { CommonEventParameters } from '../CommonEventParameters';
import type { CheckoutProduct, TCHECKOUT_STEPS } from '../../types';

/**
 * CheckOutEventType - This interface describes structure of CheckOut event's attributes type.
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
