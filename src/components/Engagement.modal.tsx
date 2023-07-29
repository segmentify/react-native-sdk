import React, { useCallback } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

import type { ModalProps } from 'react-native';

type ModalViewProps = {
  modalProps: {
    animationType?: ModalProps['animationType'];
    transparent?: ModalProps['transparent'];
    onRequestClose?: ModalProps['onRequestClose'];
    onShow?: ModalProps['onShow'];
  };
  stateProps: {
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  };
  campaign: any;
};

export const ModalView = ({
  modalProps: { animationType, transparent = true, onRequestClose, onShow },
  stateProps: { modalVisible, setModalVisible },
  campaign,
}: ModalViewProps) => {
  const onPressHandler = useCallback(() => {
    setModalVisible(!modalVisible);
  }, [modalVisible, setModalVisible]);

  return (
    <View>
      <Modal
        animationType={animationType}
        transparent={transparent}
        visible={modalVisible}
        onRequestClose={() => onRequestClose}
        onShow={() => onShow}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {`You have a ${campaign.type} campaign`}
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onPressHandler}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: '#00000080',
  },
  modalView: {
    zIndex: 9999,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    zIndex: 9999,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
