export type TBannerResponse = {
  id: string;
  instanceId: string;
  status?: string;
  searchType?: string;
  name: string;
  bannerUrl: string;
  targetUrl?: string;
  position?: string;
  width?: string;
  height?: string;
  method?: string;
  newtab?: boolean;
  isEndDateVisible?: boolean;
};

export type TMultiEventPayload = {
  name: 'INTERACTION';
  userId: string;
  type: 'widget-view';
  instanceId: string;
  interactionId: string;
  os: string;
  device: string;
  lang: string;
};

export type InterectionsResponseType = {
  search: any[][];
  campaigns: any[][];
  coupons: any[][];
  experiments: Record<string, any>;
  responses: any[][];
  statusCode: string;
  timestamp: number;
};

export type useBeforeSearchBannerInteractionReturnType = Promise<
  [InterectionsResponseType, any]
>;
