import type { SegmentifyBase } from '../segmentify-event-base.interface';
import type { TCURRENCY } from '../../types/';

/**
 * @name ProductViewEventType
 * @description This interface describes structure of ProductView event's attributes type.
 * @param {String} productId: The id of the product.
 * @param {String} title: The title of the product.
 * @param {Boolean} inStock: The availability of the product.
 * @param {String} url: The url of the product.
 * @param {String} mUrl: The mobile url of the product.
 * @param {String} image: The image url of the product.
 * @param {String} imageXS: The image url of the product for extra small screens.
 * @param {String} imageS: The image url of the product for small screens.
 * @param {String} imageM: The image url of the product for medium screens.
 * @param {String} imageL: The image url of the product for large screens.
 * @param {String} imageXL: The image url of the product for extra large screens.
 * @param {String} category: The category of the product. It should be hierarchical like 'Men > Sports > Shoes'.
 * @param {String} brand: The brand of the product.
 * @param {Number} price: The price of the product.
 * @param {Number} oldPrice: The old price of the product.
 * @param {TCURRENCY | String} currency: The currency of the product. If not given, account's currency will be used for the product.
 * @param {String} gender: The gender of the product.
 * @param {String[]} colors: The colors of the product.
 * @param {String[]} sizes: The sizes of the product.
 * @param {String[]} labels: The labels of the product.
 * @param {Boolean} noUpdate: If true, product will not be updated in the recommendation list.
 * @return {ProductViewEventType} Returns ProductViewEventType object.
 * @example
 *  const event: ProductViewEventType = {
 *   productId: '1234567890',
 *   title: 'Product Title',
 *   inStock: true,
 *   url: 'https://www.example.com/product/1234567890',
 *   image: 'https://www.example.com/product/1234567890.jpg',
 *   price: 100,
 *  }
 */
export interface ProductViewEventType extends SegmentifyBase {
  productId: String;
  title: String;
  inStock?: Boolean;
  url: String;
  mUrl?: String;
  image: String;
  imageXS?: String;
  imageS?: String;
  imageM?: String;
  imageL?: String;
  imageXL?: String;
  category: String;
  brand?: String;
  price: Number;
  oldPrice?: Number;
  currency?: TCURRENCY | String;
  gender?: String;
  colors?: String[];
  sizes?: String[];
  labels?: String[];
  noUpdate?: Boolean;
}
