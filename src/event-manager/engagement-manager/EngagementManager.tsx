import React, { useState, useEffect } from 'react';
import { useExternalStore } from './store/useExternalStore';

import { ModalView } from '../../components/Engagement.modal';
import type { ModalProps } from 'react-native';

export const EngagementManager = (props) => {
  console.log('++++++EngagementManager props', props);
  const { campaign } = useExternalStore((state) => state);
  const [modalVisible, setModalVisible] = useState(false);

  const modalProps: ModalProps = {
    animationType: 'fade',
    transparent: true,
  };

  useEffect(() => {
    if (campaign.type === 'NEWSLETTER') {
      setModalVisible(true);
    }
  }, [campaign.type, setModalVisible]);

  return (
    <ModalView
      modalProps={modalProps}
      stateProps={{ modalVisible, setModalVisible }}
      campaign={campaign}
    />
  );
};
