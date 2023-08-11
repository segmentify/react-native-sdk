/**
 * @description Segmentify Event Steps
 * @enum BASKET_OPERATIONS_STEPS
 * @property {string} ADD
 * @property {string} REMOVE
 */
export const BASKET_OPERATIONS_STEPS = {
  ADD: 'add',
  REMOVE: 'remove',
} as const;

/**
 * @description Segmentify CHECKOUT_STEPS
 * @enum CHECKOUT_STEPS
 * @property {string} CUSTOMER
 * @property {string} VIEW_BASKET
 * @property {string} PAYMENT_INFO
 * @property {string} PURCHASE
 */
export const CHECKOUT_STEPS = {
  CUSTOMER: 'customer',
  VIEW_BASKET: 'view-basket',
  PAYMENT_INFO: 'payment-info',
  PURCHASE: 'purchase',
} as const;

/**
 * @description Segmentify Event INTERACTION_TYPES
 * @enum INTERACTION_TYPES
 * @property {string} IMPRESSION
 * @property {string} CLICK
 * @property {string} SEARCH
 * @property {string} WIDGET_VIEW
 */
export const INTERACTION_TYPES = {
  IMPRESSION: 'impression',
  CLICK: 'click',
  SEARCH: 'search',
  WIDGET_VIEW: 'widget-view',
} as const;

/**
 * @description Segmentify Event PAGE_TYPES
 * @enum PAGE_TYPES
 * @property {string} HOME
 * @property {string} PRODUCT
 * @property {string} CATEGORY
 * @property {string} BASKET
 * @property {string} CHECKOUT
 * @property {string} SEARCH
 * @property {string} 404
 */

export const PAGE_TYPES = {
  'HOME': 'Home Page',
  'PRODUCT': 'Product Page',
  'CATEGORY': 'Category Page',
  'BASKET': 'Basket Page',
  'CHECKOUT': 'Checkout Page',
  'SEARCH': 'Search Page',
  '404': '404 Page',
} as const;

/**
 * @description Segmentify Event USER_OPERATIONS_STEPS
 * @enum USER_OPERATIONS_STEPS
 * @property {string} SIGN_UP
 * @property {string} SIGN_IN
 * @property {string} SIGN_OUT
 * @property {string} UPDATE
 */

export const USER_OPERATIONS_STEPS = {
  SIGN_UP: 'signup',
  SIGN_IN: 'signin',
  SIGN_OUT: 'signout',
  UPDATE: 'update',
} as const;

/**
 * @description Segmentify Event BANNER_OPERATIONS_TYPES
 * @enum BANNER_OPERATIONS_TYPES
 * @property {string} IMPRESSION
 * @property {string} CLICK
 * @property {string} UPDATE
 */

export const BANNER_OPERATIONS_TYPES = {
  IMPRESSION: 'impression',
  CLICK: 'click',
  UPDATE: 'update',
} as const;
