import type { TSEGMENTIFY_EVENT_PARAMETERS } from '../types';

/**
 * @memberof module:Constants
 * @namespace SEGMENTIFY_EVENT_PARAMS
 * @description
 * SEGMENTIFY_EVENT_PARAMS is a constant object that contains all possible parameters that can be sent with Segmentify events.
 * Each event has requiredParams and optionalParams. requiredParams is a string array that contains required parameters for the event.
 * optionalParams is a string array that contains optional parameters for the event.
 * If you send an event with missing required parameters, you will get an error response from Segmentify API.
 * If you send an event with missing optional parameters, you will not get an error response from Segmentify API.
 * You can check the required and optional parameters for each event from this object.
 * @property {object} PAGE_VIEW -  requiredParams , optionalParams
 * @property {string[]} PAGE_VIEW.requiredParams - ['sessionId', 'userId', 'lang', 'device', 'os','productId']
 * @property {string[]} PAGE_VIEW.optionalParams - ['category', 'subCategory']
 * @property {object} PRODUCT_VIEW -  requiredParams , optionalParams
 * @property {string[]} PRODUCT_VIEW.requiredParams -  ['sessionId', 'userId', 'lang', 'device', 'os','productId']
 * @property {string[]} PRODUCT_VIEW.optionalParams - optionalParams:[
      'title',
      'url',
      'mUrl',
      'image',
      'imageXS',
      'imageS',
      'imageM',
      'imageL',
      'imageXL',
      'additionalImages',
      'mainCategory',
      'category',
      'categories',
      'price',
      'oldPrice',
      'specialPrice',
      'lastUpdateTime',
      'inStock',
      'stockCount',
      'stockRatio',
      'stockStatus',
      'brand',
      'gender',
      'labels',
      'sizes',
      'allSizes',
      'colors',
      'publishTime',
      'source',
      'noUpdate',
      'activeBanners',
      'groupId',
      'scoreCount',
      'reviewCount',
      'subSource',
      'paramsList',
    ],
 * @property {object} BASKET_OPERATIONS -  requiredParams , optionalParams
 * @property {string[]} BASKET_OPERATIONS.requiredParams - ['sessionId', 'userId', 'lang', 'device', 'os','productId', 'basketId', 'step']
 * @property {string[]} BASKET_OPERATIONS.optionalParams - ['price', 'quantity', 'size', 'activeBanners']
 * @property {object} CHECKOUT -  requiredParams , optionalParams
 * @property {string[]} CHECKOUT.requiredParams - ['sessionId', 'userId', 'lang', 'device', 'os',totalPrice', 'basketId', 'step']
 * @property {string[]} CHECKOUT.optionalParams - [
      'productList',
      'orderNo',
      'paymentType',
      'activeBanners',
      'cartUrl',
      'totalDiscount',
      'discounts',
      'shipment',
      'tax',
      'coupon',
    ]
 * @property {object} USER_OPERATIONS -  requiredParams , optionalParams
 * @property {string[]} USER_OPERATIONS.requiredParams - ['sessionId', 'userId', 'lang', 'device', 'os','step']
 * @property {string[]} USER_OPERATIONS.optionalParams -  optionalParams: [
      'username',
      'fullName',
      'phone',
      'gender',
      'birthDate',
      'segments',
      'memberSince',
      'service',
      'isRegistered',
      'isLogin',
      'location',
      'emailNtf',
      'mailTest',
      'pushTest',
      'custom',
      'external',
      'userIysPermissions',
      'lastSearchDeletedKeywords',
    ],
 * @property {object} CUSTOM_EVENT - requiredParams , optionalParams
 * @property {string[]} CUSTOM_EVENT.requiredParams- ['sessionId', 'userId', 'lang', 'device', 'os','type']
 * @property {string[]} CUSTOM_EVENT.optionalParams - []
 * @property {object} INTERACTION - requiredParams , optionalParams
 * @property {string[]} INTERACTION.requiredParams ['sessionId', 'userId', 'lang', 'device', 'os','type']
 * @property {string[]} INTERACTION.optionalParams ['interactionId', 'instanceId','sessionId', 'userId', 'lang', 'device', 'os']
 * @property {object} SEARCH - requiredParams , optionalParams
 * @property {string[]} SEARCH.requiredParams ['sessionId', 'userId', 'lang', 'device', 'os']
 * @property {string[]} SEARCH.optionalParams [
      'query',
      'type',
      'ordering',
      'filters',
      'trigger',
      'service',
      'mode',
    ]
 */

const commonParams = ['sessionId', 'userId', 'lang', 'device', 'os'];

export const SEGMENTIFY_EVENT_PARAMS: TSEGMENTIFY_EVENT_PARAMETERS = {
  PAGE_VIEW: {
    requiredParams: [...commonParams],
    optionalParams: ['category', 'subCategory'],
  },
  PRODUCT_VIEW: {
    requiredParams: ['productId', ...commonParams],
    optionalParams: [
      'title',
      'url',
      'mUrl',
      'image',
      'imageXS',
      'imageS',
      'imageM',
      'imageL',
      'imageXL',
      'additionalImages',
      'mainCategory',
      'category',
      'categories',
      'price',
      'oldPrice',
      'specialPrice',
      'lastUpdateTime',
      'inStock',
      'stockCount',
      'stockRatio',
      'stockStatus',
      'brand',
      'gender',
      'labels',
      'sizes',
      'allSizes',
      'colors',
      'publishTime',
      'source',
      'noUpdate',
      'activeBanners',
      'groupId',
      'scoreCount',
      'reviewCount',
      'subSource',
      'paramsList',
    ],
  },
  BASKET_OPERATIONS: {
    requiredParams: ['productId', 'basketId', 'step', ...commonParams],
    optionalParams: ['price', 'quantity', 'size', 'activeBanners'],
  },
  CHECKOUT: {
    requiredParams: ['totalPrice', 'basketId', 'step', ...commonParams],
    optionalParams: [
      'productList',
      'orderNo',
      'paymentType',
      'activeBanners',
      'cartUrl',
      'totalDiscount',
      'discounts',
      'shipment',
      'tax',
      'coupon',
    ],
  },
  USER_OPERATIONS: {
    requiredParams: ['step', ...commonParams],
    optionalParams: [
      'username',
      'fullName',
      'phone',
      'gender',
      'birthDate',
      'segments',
      'memberSince',
      'service',
      'isRegistered',
      'isLogin',
      'location',
      'emailNtf',
      'mailTest',
      'pushTest',
      'custom',
      'external',
      'userIysPermissions',
      'lastSearchDeletedKeywords',
    ],
  },
  CUSTOM_EVENT: {
    requiredParams: ['type', ...commonParams],
    optionalParams: [],
  },
  INTERACTION: {
    requiredParams: ['type'],
    optionalParams: ['interactionId', 'instanceId', ...commonParams],
  },
  SEARCH: {
    requiredParams: ['sessionId', 'userId', ...commonParams],
    optionalParams: [
      'query',
      'type',
      'ordering',
      'filters',
      'trigger',
      'service',
      'mode',
    ],
  },
};
