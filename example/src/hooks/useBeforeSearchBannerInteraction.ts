import {FireEvent, useSegmentifyStorage} from '@segmentify/react-native-sdk';

type TBannerResponse = {
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

type TMultiEventPayload = {
  name: 'INTERACTION';
  userId: string;
  type: 'widget-view';
  instanceId: string;
  interactionId: string;
  os: string;
  device: string;
  lang: string;
};

type InterectionsResponseType = {
  search: any[][];
  campaigns: any[][];
  coupons: any[][];
  experiments: Record<string, any>;
  responses: any[][];
  statusCode: string;
  timestamp: number;
};

export const useBeforeSearchBannerInteraction = async ({
  banners,
}: {
  banners: TBannerResponse[];
}) => {
  const {segmentify} = useSegmentifyStorage();
  const multiEventPayload: TMultiEventPayload[] = banners.map(banner => {
    return {
      name: 'INTERACTION',
      userId: segmentify?.user?.userId,
      type: 'widget-view',
      instanceId: banner.instanceId,
      interactionId: banner.id,
      os: segmentify?.deviceInformation.deviceType,
      device: segmentify?.deviceInformation.deviceType,
      lang: 'TR',
    };
  });

  const handleInteraction = await FireEvent({
    type: 'INTERACTION',
    eventPayload: {
      name: 'INTERACTION',
      userId: segmentify?.user?.userId,
      type: 'impression',
      instanceId: 'BEFORE_SEARCH',
    },
  }).then((impressionResponse: InterectionsResponseType) => {
    return impressionResponse;
  });

  const handleWidgetImpression = multiEventPayload.forEach(
    async (banner: TMultiEventPayload) => {
      await FireEvent({
        type: 'INTERACTION',
        eventPayload: banner,
      }).then((widgetViewResponse: InterectionsResponseType) => {
        return widgetViewResponse;
      });
    },
  );

  const [bannerInteractionEventResponse, bannerWidgetImpressionResponse] =
    await Promise.all([handleInteraction, handleWidgetImpression]);

  return [bannerInteractionEventResponse, bannerWidgetImpressionResponse];
};
