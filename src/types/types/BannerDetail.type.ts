/**
 * @typedef
 * @name BannerDetail
 * @description BannerDetail type is used to define the type of the banner detail.
 * @type {BannerDetail}
 * @example
 * {
 *  "title": "Banner Title",
 *  "image": "https://cdn.segmentify.com/demo/banner.jpg",
 *  "order": 1,
 *  "urls": [
 *   "https://www.segmentify.com",
 *   "https://www.segmentify.com"
 *  ]
 * }
 */
export type BannerDetail = {
  /**
   * title is the title of the banner.
   * @example
   * "Banner Title"
   */
  title?: string;
  /**
   * image is the image of the banner.
   * @example
   * "https://cdn.segmentify.com/demo/banner.jpg"
   */
  image?: string;
  /**
   * order is the order of the banner.
   * @example
   * 1
   */
  order?: number;
  /**
   * urls is the urls of the banner.
   * @example
   * [
   * "https://www.segmentify.com",
   * "https://www.segmentify.com"
   * ]
   */
  urls?: string[];
};
