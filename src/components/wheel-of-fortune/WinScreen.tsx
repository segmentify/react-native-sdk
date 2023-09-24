import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import type { TWheelOfFortuneOptions } from '../../types/types/wheel-of-fortune.type';

interface IWinScreen {
  options: TWheelOfFortuneOptions;
}

const WinScreen = ({ options }: IWinScreen) => {
  const [copyText, setCopyText] = useState('Copy');
  const { resultTitle } = options;
  const { coupon, description } = options.reward;

  const copyToClipboard = () => {
    Clipboard.setString(options.reward.coupon);

    setCopyText('Copied');
    setTimeout(() => {
      setCopyText('Copy');
    }, 1000);
  };

  return (
    <>
      <Text style={styles.title}>{resultTitle}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
      <View style={styles.couponCodeContainer}>
        <View style={styles.couponCodeTextContainer}>
          <Text style={styles.couponCodeText}>{coupon}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            copyToClipboard();
          }}
          style={styles.copyButtonContainer}
        >
          <View
            style={[
              styles.copyButton,
              { backgroundColor: options?.ctaButtonColor || '#fff' },
            ]}
          >
            <Text
              style={[
                styles.copyButtonText,
                { color: options?.ctaButtonTextColor || '#333' },
              ]}
            >
              {copyText}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WinScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  couponCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  couponCodeTextContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#777',
  },
  couponCodeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#777',
  },
  copyButtonContainer: {
    marginLeft: 10,
  },
  copyButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    minWidth: 100,
  },
  copyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
