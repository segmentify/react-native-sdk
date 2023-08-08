import type { CommonEventParameters } from '../CommonEventParameters';
import type { BannerDetail } from '../../types';

/**
 * @name BannerGroupViewEventType
 * @description This interface describes structure of BannerGroupView event's attributes type.
 * @param {String} group: The group of the banner.
 * @param {Array<BannerDetail>} banners: The banners of the group.
 * @returns BannerGroupViewEventType
 * @example
 * const event: BannerGroupViewEventType = {
 *  group: 'Banner Group',
 *  banners: [
 *   {
 *    title: 'Banner Title',
 *    image: 'https://cdn.segmentify.com/demo/banner-1.jpg',
 *    order: 1,
 *    urls: ['https://www.segmentify.com', 'https://www.segmentify.com'],
 *   },
 *  ],
 * }
 */
export interface BannerGroupViewEventType extends CommonEventParameters {
  group: String;
  banners?: Array<BannerDetail>;
}
