import type { CommonEventParameters } from '../CommonEventParameters';
import type { BannerDetail } from '../../types';

/**
 * This interface describes structure of BannerGroupView event's attributes type.
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
   *   title: 'My Awesome Banner Title',
   *   image: 'https://www.myawesomewebsite.com/my-awesome-banner-image.jpg',
   *   order: 1,
   *   urls: [
   *    'https://www.myawesomewebsite.com/my-awesome-banner-url-1',
   *    'https://www.myawesomewebsite.com/my-awesome-banner-url-2',
   *   ]
   * }
   * ]
   */
  banners?: Array<BannerDetail>;
}
