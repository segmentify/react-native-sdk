import React, { useEffect, useState } from 'react';
import { apiGetAway, whichDynamicContentExist } from '../../utils';
import WheelOfFortune from '../wheel-of-fortune';

const DynamicContent = () => {
  const [responseData, setResponseData] = useState(null);
  const [campaignType, setCampaignType] = useState('');

  useEffect(() => {
    const interceptor = apiGetAway.interceptors.response.use(
      async (response: any) => {
        console.log('DCI Response -> ', response);
        setResponseData(response.data);

        return response;
      }
    );

    return () => apiGetAway.interceptors.response.eject(interceptor);
  }, []);

  useEffect(() => {
    if (responseData) {
      const campaignTypeTemp = whichDynamicContentExist(responseData);
      setCampaignType(campaignTypeTemp);
      console.log('Response Data Exist');
    }
    console.log('DC CampaignType -> ', campaignType);
  }, [responseData, campaignType]);

  if (campaignType === 'WOF') {
    const rewardList: string[] = [
      'test1',
      'test2',
      'test3',
      'test4',
      'test5',
      'test6',
    ];
    return <WheelOfFortune options={{ rewards: rewardList }} />;
  }

  return null;
};

export default DynamicContent;
