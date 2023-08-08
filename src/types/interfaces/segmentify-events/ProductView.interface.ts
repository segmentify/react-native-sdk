import type { CommonEventParameters } from '../CommonEventParameters';

/**
 * @typedef
 * @name ProductView
 * @description
 * ProductView is a type that describes the parameters that product view event takes.
 * @property {string} productId The id of the product.
 * @property {string} title The title of the product.
 * @property {boolean} [inStock] The availability of the product.
 * @property {string} url The url of the product.
 * @property {string} [mUrl] The mobile url of the product.
 * @property {string} image The image url of the product.
 * @property {string} [imageXS] The image url of the product.
 * @property {string} [imageS] The image url of the product.
 * @property {string} [imageM] The image url of the product.
 * @property {string} [imageL] The image url of the product.
 * @property {string} [imageXL] The image url of the product.
 * @property {string} category Category of the product.
 * @property {string} [brand] The brand of the product.
 * @property {number} price The price of the product.
 * @property {number} [oldPrice] The old price of the product.
 * @example
 * {
 *  productId: '1234567890',
 *  title: 'Jordan 1 Mid SE GS <3',
 *  inStock: true,
 *  url: 'https://www.example.com/product/1234567890',
 *  mUrl: 'https://m.example.com/product/1234567890',
 *  image: 'https://my-cdn/product/1234567890.jpg',
 *  imageXS: 'https://my-cdn/product/1234567890.jpg',
 *  imageS: 'https://my-cdn/product/1234567890.jpg',
 *  imageM: 'https://my-cdn/product/1234567890.jpg',
 *  imageL: 'https://my-cdn/product/1234567890.jpg',
 *  imageXL: 'https://my-cdn/product/1234567890.jpg',
 *  category: 'Parent_Category > Child_1_Category > Child_2_Category',
 *  brand: 'Nike',
 *  price: 100,
 *  oldPrice: 120,
 *  gender: 'M',
 *  colors: ['red', 'blue', 'green'],
 *  sizes: ['S', 'M', 'L'],
 *  labels: ['new', 'discounted'],
 *  noUpdate: true,
 * }
 */
export interface ProductView extends CommonEventParameters {
  /**
   * The id of the product.
   * @example
   * '1234567890'
   */
  productId: string;
  /**
   * The title of the product.
   * @example
   * 'Jordan 1 Mid SE GS <3'
   */
  title: string;
  /**
   * The availability of the product.
   * @example
   * true
   * @default ""
   */
  inStock?: boolean;
  /**
   * The url of the product.
   * @example
   * 'https://www.example.com/product/1234567890'
   * @default ""
   */
  url: string;
  /**
   * The mobile url of the product.
   * @example
   * 'https://m.example.com/product/1234567890'
   * @default ""
   */
  mUrl?: string;
  /**
   * The image url of the product.
   * @example
   * 'https://my-cdn/product/1234567890.jpg'
   * @default ""
   */
  image: string;
  /**
   * The image url of the product.
   * @example
   * 'https://my-cdn/product/1234567890.jpg'
   * @default ""
   */
  imageXS?: string;
  /**
   * The image url of the product.
   * @example
   * 'https://my-cdn/product/1234567890.jpg'
   * @default ""
   */
  imageS?: string;
  /**
   * The image url of the product.
   * @example
   * 'https://my-cdn/product/1234567890.jpg'
   * @default ""
   */
  imageM?: string;
  /**
   * The image url of the product.
   * @example
   * 'https://my-cdn/product/1234567890.jpg'
   * @default ""
   */
  imageL?: string;
  /**
   * The image url of the product.
   * @example
   * 'https://my-cdn/product/1234567890.jpg'
   * @default ""
   */
  imageXL?: string;
  /**
   * Category of the product.
   * @example
   * "Parent_Category > Child_1_Category > Child_2_Category"
   */
  category: string;
  /**
   * The brand of the product.
   * @example
   * 'Nike'
   * @default ""
   */
  brand?: string;
  /**
   * The price of the product.
   * @example
   * 100
   */
  price: number;
  /**
   * The old price of the product.
   * @example
   * 120
   */
  oldPrice?: number;
  /**
   * Gender of the product.
   * @example
   * 'M', 'F' or what you feel like
   */
  gender?: string;
  /**
   * Colors of the product.
   * @example
   * ['red', 'blue', 'green']
   */
  colors?: string[];
  /**
   * Sizes of the product.
   * @example
   * ['S', 'M', 'L'] - ['36', '37', '38']
   */
  sizes?: string[];
  /**
   * Labels of the product.
   * @example
   * ['new', 'discounted']
   */
  labels?: string[];
  /**
   * If true, product will not be updated in the recommendation list.
   * @example
   * true
   */
  noUpdate?: boolean;
}
