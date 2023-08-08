import type { CommonEventParameters } from '../CommonEventParameters';

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
