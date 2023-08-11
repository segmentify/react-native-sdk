import type { CommonEventParameters } from '../CommonEventParameters';
import type { TPAGE_TYPES } from '../../types';

type PageViewEventType = typeof TPAGE_TYPES;

/**
 * @name PageViewEventType
 * @description This interface describes structure of PageView event's attributes type.
 * @param {string} category: The category of the page view event. It can be 'Home Page', 'Product Page', 'Category Page', 'Search Page', 'Basket Page', 'Checkout Page' or some custom category. {@link TPAGE_TYPES}
 * @param {string} subCategory: The sub category of the page view event.
 * @returns PageViewEventType
 * @example
 * {
 *  category: 'Category Page',
 *  subCategory: 'Shoes'
 * }
 */

export interface PageView extends CommonEventParameters {
  /**
   * The category of the page view event. It can be 'Home Page', 'Product Page', 'Category Page', 'Search Page', 'Basket Page', 'Checkout Page' or some custom category.
   * @example
   * 'Home Page', 'Product Page', 'Category Page', 'Search Page', 'Basket Page', 'Checkout Page'
   */
  category?: PageViewEventType;
  /**
   * The sub category of the page view event.
   * @example
   * 'Shoes'
   */
  subCategory?: string;
}
