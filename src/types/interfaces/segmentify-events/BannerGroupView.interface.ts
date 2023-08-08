import type { CommonEventParameters } from '../CommonEventParameters';
import type { BannerDetail } from '../../types';

/**
 * @typedef
 * @name BannerGroupView
 * @description BannerGroupView type is used to define the type of the banner group view event.
 * @property {string} group - The group of the banner.
 * @property {BannerDetail[]} [banners] - The banners of the group.
 * @type {BannerGroupView}
 * @example
 *	{
 *	  "group": "Categorized_Banner_Group",
 *	  "banners": [{
 *	    title: 'My Awesome Banner Title',
 *	    image: 'https://www.myawesomewebsite.com/my-awesome-banner-image.jpg',
 *	    order: 1,
 *	    urls: [
 *	      'https://www.myawesomewebsite.com/my-awesome-banner-url-1',
 *	      'https://www.myawesomewebsite.com/my-awesome-banner-url-2',
 *	    ]
 *	  }]
 *	}
 *
 */
export interface BannerGroupView extends CommonEventParameters {
  /**
   * The group of the banner.
   * @example
   * "Categorized_Banner_Group"
   */
  group: string;
  /**
   * The banners of the group.
   * @example
   * [
   *  {
   *      title: 'My Awesome Banner Title',
   *	    image: 'https://www.myawesomewebsite.com/my-awesome-banner-image.jpg',
   *	    order: 1,
   *	    urls: [
   *	      'https://www.myawesomewebsite.com/my-awesome-banner-url-1',
   *	      'https://www.myawesomewebsite.com/my-awesome-banner-url-2',
   *	    ]
   * }
   * ]
   */
  banners?: Array<BannerDetail>;
}
