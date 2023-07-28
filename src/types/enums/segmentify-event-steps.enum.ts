export const BASKET_OPERATIONS_STEPS = {
  ADD: 'add',
  REMOVE: 'remove',
} as const;

export const CHECKOUT_STEPS = {
  CUSTOMER: 'customer',
  VIEW_BASKET: 'view-basket',
  PAYMENT_INFO: 'payment-info',
  PURCHASE: 'purchase',
} as const;

export const INTERACTION_TYPES = {
  IMPRESSION: 'impression',
  CLICK: 'click',
  SEARCH: 'search',
  WIDGET_VIEW: 'widget-view',
} as const;

export const PAGE_TYPES = {
  'HOME': 'Home Page',
  'PRODUCT': 'Product Page',
  'CATEGORY': 'Category Page',
  'BASKET': 'Basket Page',
  'CHECKOUT': 'Checkout Page',
  'SEARCH': 'Search Page',
  '404': '404 Page',
} as const;

export const USER_OPERATIONS_STEPS = {
  SIGN_UP: 'signup',
  SIGN_IN: 'signin',
  SIGN_OUT: 'signout',
  UPDATE: 'update',
} as const;

export const BANNER_OPERATIONS_TYPES = {
  IMPRESSION: 'impression',
  CLICK: 'click',
  UPDATE: 'update',
} as const;
