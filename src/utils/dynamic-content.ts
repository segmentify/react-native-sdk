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
    };
    return returnData;
  }
  return null;
};
