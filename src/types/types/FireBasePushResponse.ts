/**
 * @typedef
 * @name TFireBasePushResponse
 * @description TFireBasePushResponse type is used to define the type of the firebase push response.
 * @property {number} sentTime - Sent time
 * @property {object} data - Data
 * @property {string} data.dataCenterUrl - Data center url
 * @property {string} data.instanceId - Instance id
 * @property {string} data.image - Image
 * @property {string} data.title - Title
 * @property {string} data.badge - Badge
 * @property {string} data.sound - Sound
 * @property {string} data.body - Body
 * @property {string} data.apiKey - Api key
 * @property {string} messageId - Message id
 * @property {number} ttl - Ttl
 * @property {string} from - From
 * @type {TFireBasePushResponse}
 * @example
 *  {
 *  "sentTime": 123456789,
 *  "data": {
 *    "dataCenterUrl": "https://cdn.segmentify.com/demo",
 *    "instanceId": "123456789",
 *    "image": "https://cdn.segmentify.com/demo/banner.jpg",
 *    "title": "Banner Title",
 *    "badge": "https://cdn.segmentify.com/demo/banner.jpg",
 *    "sound": "https://cdn.segmentify.com/demo/banner.jpg",
 *    "body": "Banner Body",
 *    "apiKey": "123456789",
 *  },
 *  "messageId": "123456789",
 *  "ttl": 123456789
 * }
 */
export type TFireBasePushResponse = {
  sentTime: number;
  data: {
    dataCenterUrl: string;
    instanceId: string;
    image: string;
    title: string;
    badge: string;
    sound: string;
    body: string;
    apiKey: string;
  };
  messageId: string;
  ttl: number;
  from: string;
};
