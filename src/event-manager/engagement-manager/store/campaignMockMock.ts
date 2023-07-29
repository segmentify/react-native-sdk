export const campaignMock = {
  campaign: {
    type: 'NEWSLETTER',
    name: 'Bundle Popup Activator',
    instanceId: 'cmp_9f4b1b5aa6000',
    status: 'ACTIVE',
    devices: ['MOBILE'],
    startDate: 1630912900659,
    note: '',
    timing: {
      type: 'IMMEDIATE',
      param: '',
    },
    frequency: {
      type: 'ALWAYS',
      param: '',
    },
    filters: [
      {
        type: 'PAGE',
        includedCategories: ['Product Page'],
        excludedCategories: [],
      },
    ],
    accountId: 'acc_881724458a000',
    prioritized: false,
    title: '',
    image: '',
    bgColor: '#000',
    textColor: '#fff',
    url: '',
    verticalPosition: 'top',
    html: '<div class="seg-notification-bar seg-notification-bar-v2 [[divClass]]" style="background-color:[[bgColor]];">\n    [[#url]]<a class="seg-notification-bar-v2-[[instanceId]]" href="[[url]]">[[/url]]\n        [[#image]]<img src="[[image]]">[[/image]]\n        [[#title]]<h1 style="color:[[textColor]]">[[title]]</h1>[[/title]]\n    [[#url]]</a>[[/url]]\n</div>',
    css: '',
    preJs:
      'function preRenderConf(conf) { /* add your custom code inside this function */ }',
    postJs:
      "window.jQuery(document).ajaxComplete(function (event, xhr, settings) {\n  if (settings.url.indexOf('checkout/cart/add/product') > -1) {\n    var productId = jQuery('.gallery-item').attr('data-style-number');\n    window.Segmentify('event:custom',{\n      type:'BundleBasketAdd',\n      params: {\n        productId:productId,\n        subCategory:'BundleBasketAdd',      \n        category:'BundleBasketAdd'      \n      }\n    });\n  }\n\n});",
    sticky: 'false',
  },
};
