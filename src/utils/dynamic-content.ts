import { FireEvent } from '../event-manager';

const usableCampaigns = ['WHEEL_OF_FORTUNE'];

export const whichDynamicContentExist = (data: any) => {
  let firstCampaign: any = null;
  data?.campaigns.some((request: any) => {
    const campaignDetail: any = request.find((campaign: any) => {
      return usableCampaigns.includes(campaign.type);
    });
    if (campaignDetail) {
      firstCampaign = campaignDetail;
    }
    return true;
  });
  if (firstCampaign) {
    return {
      campaignType: firstCampaign.type,
      campaignData: getCampaignData(firstCampaign, firstCampaign.type),
      campaignFullData: firstCampaign,
    };
  }
  return null;
};

const getCampaignData = (data: any, campaignType: string) => {
  if (campaignType === 'WHEEL_OF_FORTUNE') {
    const {
      reward,
      possibleRewards,
      baseColor,
      bgImage,
      campaignTitle,
      ctaButtonColor,
      ctaButtonTextColor,
      ctaButtonContent,
      overlay,
      pointerColor,
      pointerImage,
      resultTitle,
      lang,
    } = data;
    const returnData = {
      reward,
      possibleRewards,
      baseColor,
      bgImage,
      campaignTitle,
      ctaButtonColor,
      ctaButtonTextColor,
      ctaButtonContent,
      overlay,
      pointerColor,
      pointerImage,
      resultTitle,
      lang,
    };
    return returnData;
  }
  return null;
};

export const sendInteractionForDynamicContent = (
  segmentify: any,
  campaignData: any
) => {
  const impressionDetails = {
    name: 'INTERACTION',
    type: 'impression',
    userId: segmentify?.user?.userId,
    sessionId: segmentify?.user?.sessionId,
    instanceId: campaignData?.instanceId,
    interactionId: campaignData?.instanceId,
  };

  FireEvent({
    type: 'INTERACTION',
    eventPayload: impressionDetails,
  });
};
