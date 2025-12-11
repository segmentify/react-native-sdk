export const PAGE_VIEW_EVENT_EXAMPLE = {
  name: 'PAGE_VIEW',
  userId: '6651177901089677312',
  sessionId: '6651177901089677313',
  testMode: 'false',
  device: 'ANDROID',
  noProcess: false,
  tryCount: 0,
  nextPage: false,
  dnt: false,
  dnp: false,
  params: {},
  recommendIds: [],
  browser: 'Chrome',
  os: 'ANDROID',
  osversion: '10.15.7',
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36',
  lang: 'TR',
  currency: 'TRY',
  region: 'TR',
  async: 'true',
  globalMode: 'REAL',
  experiments: {},
  email: '',
  ft: '2025.10.16 15:50:57.230',
  tz: '-180',
  category: 'Category Page',
  subCategory: 'KADIN > Vibe',
  external: {
    fbpId: 'fb.1.1759995477675.503038778816504209',
  },
};

export const INTERACTION_EVENT_EXAMPLE = {
  async: 'false',
  browser: 'Chrome',
  currency: 'TRY',
  device: 'app',
  dnt: false,
  email: '',
  experiments: {},
  ft: '2023.07.12 23:26:07.156',
  globalMode: 'REAL',
  instanceId: 'scn_ad75948b1e000',
  interactionId: 'act_ad75948b1e001',
  lang: 'TR',
  name: 'INTERACTION',
  nextPage: false,
  noProcess: false,
  os: 'android',
  osversion: '10.15.7',
  pageUrl: 'https://www.bauhaus.com.tr/',
  params: {},
  recommendIds: [],
  referrer: '',
  region: '',
  sessionId: '4020489616172081152',
  testMode: 'false',
  tryCount: 0,
  type: 'impression',
  tz: '-180',
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  userId: '-897541074991628287',
};

export const WIDGET_VIEW_EVENT_EXAMPLE = {
  async: 'false',
  browser: 'Chrome',
  currency: 'TRY',
  device: 'app',
  dnt: false,
  email: '',
  experiments: {},
  ft: '2023.07.12 23:26:07.156',
  globalMode: 'REAL',
  instanceId: 'scn_ad75948b1e000',
  lang: 'TR',
  name: 'INTERACTION',
  nextPage: false,
  noProcess: false,
  os: 'android',
  osversion: '10.15.7',
  pageUrl: 'https://www.example.com.tr/',
  params: {},
  recommendIds: [],
  referrer: '',
  region: '',
  sessionId: '4020489616172081152',
  testMode: 'false',
  tryCount: 0,
  type: 'widget-view',
  tz: '-180',
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  userId: '-897541074991628287',
}

export const PRODUCT_VIEW_EVENT_EXAMPLE = {
  allSizes: ['12'],
  async: 'true',
  brand: 'NIKE',
  browser: 'Chrome',
  categories: [],
  currency: 'TRY',
  device: 'app',
  dnt: false,
  email: '',
  experiments: {},
  ft: '2023.07.13 02:03:19.375',
  globalMode: 'REAL',
  lang: 'TR',
  mainCategory: 'Erkek',
  name: 'PRODUCT_VIEW',
  nextPage: false,
  noProcess: false,
  noUpdate: ['image', 'inStock', 'category', 'url', 'gender'],
  os: 'android',
  osversion: '10.15.7',
  pageUrl:
    'https://www.intersport.com.tr/nike-air-zoom-pegasus-40-erkek-siyah-kosu-ayakkabisi_282237?d=12881',
  params: {selectedSize: '', color: 'BEYAZ', model: 'DV3853-101'},
  paramsList: {},
  price: '3099.90',
  productId: 'DV3853.101_101',
  recommendIds: [],
  referrer: 'https://www.intersport.com.tr/erkek/ayakkabi/kosu-yuruyus',
  region: '',
  sessionId: '4020489616172081152',
  sizes: ['12'],
  source: 'INTERNAL',
  testMode: 'false',
  title: 'Nike Air Zoom Pegasus 40 Erkek Siyah Koşu Ayakkabısı',
  tryCount: 0,
  tz: '-180',
  url: 'https://www.intersport.com.tr/nike-air-zoom-pegasus-40-erkek-siyah-kosu-ayakkabisi_282237?d=12881',
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  userId: '-897541074991628287',
};

export const INTERACTION_CLICK_KEVENT_EXAMPLE = {
  name: 'INTERACTION',
  userId: '-897541074991628287',
  sessionId: '3899405703962625',
  type: 'click',
  instanceId: 'scn_d75a118c0c000',
  interactionId: 'productId',
  os: 'android',
  device: 'mobile',
  lang: 'EN',
  currency: 'EUR',
  region: '',
  pageUrl: 'https://example.com/',
}

export const INTERACTION_CLICK_SEARCHANDISING = {
  name: 'INTERACTION',
  userId: '-897541074991628287',
  sessionId: '3899405703962625',
  os: 'android',
  device: 'mobile',
  lang: 'EN',
  currency: 'EUR',
  region: '',
  pageUrl: 'https://example.com/',
  type: "search",
  interactionId: "productId|product",
  instanceId: "fcs_d7300dff70000"
}

export const INTERACTION_CLICK_SEARCH = {
  name: 'INTERACTION',
  userId: '-897541074991628287',
  sessionId: '3899405703962625',
  os: 'android',
  device: 'mobile',
  lang: 'EN',
  currency: 'EUR',
  region: '',
  pageUrl: 'https://example.com/',
  type: "search",
  interactionId: "productId",
  instanceId: "bs_product"
}

export const BASKET_OPERATIONS_REMOVE_EVENT_EXAMPLE = {
  name: 'BASKET_OPERATIONS',
  userId: '-897541074991628287',
  sessionId: '3899405703962625',
  step: 'remove',
  productId: '22913',
  basketId: 'basket_userId',
}

export const BASKET_OPERATIONS_ADD_EVENT_EXAMPLE = {
  name: 'BASKET_OPERATIONS',
  userId: '-897541074991628287',
  sessionId: '3899405703962625',
  step: 'add',
  productId: '22913',
  basketId: 'basket_userId',
  price: 499.00,
  quantity: 1,
  os: 'android',
  device: 'mobile',
  lang: 'EN',
  currency: 'EUR',
  region: '',
  pageUrl: 'https://example.com/',
}




export const SEARCH_EVENT_EXAMPLE = {
  name: 'SEARCH',
  query: '',
  userId: '-897541074991628287',
  sessionId: '4020489616172081152',
  lang: 'EN',
  device: 'mobile',
  os: 'android',
};

export const BEFORE_SEARCH_WIDGET_VIEW_EVENT_EXAMPLE = {
  name: 'INTERACTION',
  userId: '-897541074991628287',
  sessionId: '3899405703962625',
  type: 'widget-view',
  instanceId: 'BEFORE_SEARCH',
  interactionId: 'static',
  os: 'android',
  device: 'mobile',
  lang: 'EN',
  currency: 'EUR',
  region: '',
  pageUrl: 'https://example.com/',
};

export const BEFORE_SEARCH_IMPRESSION_EVENT_EXAMPLE = {
  name: 'INTERACTION',
  userId: '-897541074991628287',
  sessionId: '3899405703962625',
  type: 'impression',
  instanceId: 'BEFORE_SEARCH',
  interactionId: 'static',
  os: 'android',
  device: 'mobile',
  lang: 'EN',
  currency: 'EUR',
  region: '',
  pageUrl: 'https://example.com/',
}

export const AFTER_SEARCH_WIDGET_VIEW_EVENT_EXAMPLE = {
  name: 'INTERACTION',
  userId: '-897541074991628287',
  sessionId: '3899405703962625',
  type: 'widget-view',
  instanceId: 'SEARCH',
  interactionId: 'static',
  os: 'android',
  device: 'mobile',
  lang: 'EN',
  currency: 'EUR',
  region: '',
  pageUrl: 'https://example.com/',
};

export const AFTER_SEARCH_IMPRESSION_EVENT_EXAMPLE = {
  name: 'INTERACTION',
  userId: '-897541074991628287',
  sessionId: '3899405703962625',
  type: 'impression',
  instanceId: 'SEARCH',
  interactionId: 'static',
  os: 'android',
  device: 'mobile',
  lang: 'EN',
  currency: 'EUR',
  region: '',
  pageUrl: 'https://example.com/',
}

export const SEARCHANDISING_EVENT_EXAMPLE = {
  name: "SEARCH",
  userId: '-897541074991628287',
  sessionId: '3899405703962625',
  params: {
    "_search_no_cache_": "false"
  },
  type: 'faceted',
  os: 'android',
  device: 'mobile',
  lang: 'EN',
  currency: 'EUR',
  region: '',
  pageUrl: 'example.com/searchandising?q=vitam&page=1&trigger=keyword',
  query: 'vitamin',
  ordering: {
      page: 1,
      sort: "SMART_SORTING"
  },
  filters: [],
  trigger: "keyword", // "page" || 'filter', 
  service: "default"
}

export const SEARCHANDISING_FILTER_EVENT_EXAMPLE = {
  name: "SEARCH",
  userId: '-897541074991628287',
  sessionId: '3899405703962625',
  os: 'android',
  device: 'mobile',
  lang: 'EN',
  currency: 'EUR',
  region: '',
  params: {
    "_search_no_cache_": "false"
  },
  service: "default",
  type: 'faceted',
  trigger: "filter",
  ordering: {
    "page": 1,
    "sort": "SMART_SORTING"
  },
  filters: [
    {
        facet: "category",
        values: [
            "Antioksidan > Koenzim Q10 (CoQ-10)",
        ]
    }
],
  
}
