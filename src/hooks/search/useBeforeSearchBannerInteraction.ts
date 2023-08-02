import { FireEvent, useSegmentifyStorage } from '../../index';
import type {
  TBannerResponse,
  TMultiEventPayload,
  InterectionsResponseType,
  useBeforeSearchBannerInteractionReturnType,
} from './types';

export const useBeforeSearchBannerInteraction = async ({
  banners,
}: {
  banners: TBannerResponse[];
}): useBeforeSearchBannerInteractionReturnType => {
  const { segmentify } = useSegmentifyStorage();
  const multiEventPayload: TMultiEventPayload[] = banners.map((banner) => {
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
    }
  );

  const [bannerInteractionEventResponse, bannerWidgetImpressionResponse] =
    await Promise.all([handleInteraction, handleWidgetImpression]);

  return [bannerInteractionEventResponse, bannerWidgetImpressionResponse];
};
