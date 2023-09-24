import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { whichDynamicContentExist, apiGetAway } from '../../utils';
import WheelOfFortune from '../wheel-of-fortune';
import type { TWheelOfFortuneOptions } from '../../types/types/wheel-of-fortune.type';

const DynamicContent = () => {
  const [responseData, setResponseData] = useState(null);
  const [campaignType, setCampaignType] = useState('');
  const [campaignData, setCampaignData] =
    useState<TWheelOfFortuneOptions | null>(null);
  const [isSet, setIsSet] = useState(false);

  const closeCampaign = () => {
    setCampaignType('');
    setResponseData(null);
  };

  const defaultOptions = {
    closeCampaign: closeCampaign,
  };

  useEffect(() => {
    setIsSet(true);

    const interceptor = apiGetAway.interceptors.response.use(
      async (response: any) => {
        if (response.data?.campaigns && response.data.campaigns.length > 0) {
          setResponseData(response.data);
        }

        return response;
      }
    );

    return () => apiGetAway.interceptors.response.eject(interceptor);
  }, []);

  useEffect(() => {
    if (responseData !== null && campaignType === '' && isSet) {
      const campaignDetails: any = whichDynamicContentExist(responseData);
      const campaignTypeTemp = campaignDetails?.campaignType || '';
      const campaignDataTemp: TWheelOfFortuneOptions | null =
        campaignDetails?.campaignData || null;

      if (campaignDataTemp === null) {
        return;
      }
      setCampaignType(campaignTypeTemp);
      setCampaignData(campaignDataTemp);
    }
  }, [responseData, campaignType, isSet]);

  if (!isSet) {
    return null;
  }

  if (campaignType === 'WHEEL_OF_FORTUNE' && campaignData !== null) {
    return (
      <View
        style={[
          styles.centeredView,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor:
              campaignData?.overlay === 'true'
                ? 'rgba(53, 44, 44, 0.8)'
                : 'transparent',
          },
        ]}
      >
        <Modal
          visible={true}
          animationType="slide"
          transparent={true}
          style={styles.centeredView}
        >
          <WheelOfFortune options={campaignData} {...defaultOptions} />
        </Modal>
      </View>
    );
  }

  return null;
};

export default DynamicContent;

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredModalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
