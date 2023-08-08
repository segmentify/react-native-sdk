/**
 * @typedef
 * @name CheckoutProduct
 * @memberof Types
 * @description CheckoutProduct type is used to define the type of the checkout product.
 * @property {string} productId - Product id
 * @property {number} [price] - Product price
 * @property {number} [quantity] - Product quantity
 * @property {string} [currency] - Product currency
 * @type {CheckoutProduct}
 * @example
 * {
 *  "productId": "123456789",
 *  "price": 100,
 *  "quantity": 1,
 *  "currency": "USD"
 * }

 */
export type CheckoutProduct = {
  /**
   * productId is the id of the product.
   * @example
   * "123456789"
   */
  productId: string;
  /**
   * price is the price of the product.
   * @example
   * 100
   */
  price?: number;
  /**
   * quantity is the quantity of the product.
   * @example
   * 1
   */
  quantity?: number;
  /**
   * currency is the currency of the product.
   * @example
   * "USD"
   */
  currency?: string;
};
