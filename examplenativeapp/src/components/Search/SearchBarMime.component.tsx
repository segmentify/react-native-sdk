import React from 'react';
import {
  TextInput,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TERTIARY_COLOR} from '../../constants';
import {NotificationIcon} from '../Icons';

type SearchBarMimeProps = {
  navigation: any;
  isMime?: boolean;
  inputValue?: string;
  onSearchHandler?: (text: string) => void;
};

export const SearchBarMime = ({
  navigation,
  isMime = true,
  inputValue = '',
  onSearchHandler,
}: SearchBarMimeProps) => {
  const windowWidth = Dimensions.get('window').width;

  return (
    <View
      style={
        isMime
          ? SearchInputStyles(windowWidth).container
          : SearchInputStyles(windowWidth).isMimeContainer
      }>
      {isMime && (
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            style={SearchInputStyles(windowWidth).image}
            source={require('../../assets/icon/logo.png')}
          />
        </TouchableOpacity>
      )}
      <View
        style={
          isMime
            ? SearchInputStyles(windowWidth).border
            : SearchInputStyles(windowWidth).isMimeBorder
        }
        onTouchStart={() => {
          if (isMime) {
            navigation.navigate('Search');
          }
        }}>
        <TextInput
          placeholder="Search Products..."
          placeholderTextColor={TERTIARY_COLOR}
          value={inputValue}
          editable={!isMime}
          onChangeText={
            onSearchHandler ? text => onSearchHandler(text) : undefined
          }
        />
      </View>
      <TouchableOpacity
        style={
          isMime
            ? SearchInputStyles(windowWidth).notification
            : SearchInputStyles(windowWidth).isMimeNotification
        }>
        <NotificationIcon width={32} height={32} color="#7d7d7d" />
      </TouchableOpacity>
    </View>
  );
};

const commonStyles = {
  marginTop: 4,
  borderRadius: 6,
  height: 44,
};

export const SearchInputStyles = (windowWidth: number) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginLeft: -10,
    },
    border: {
      position: 'relative',
      width: windowWidth - 100,
      marginLeft: 10,
      marginRight: 5,
      marginBottom: 4,
      borderWidth: 2,
      borderColor: '#7d7d7d',
      ...commonStyles,
    },
    isMimeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      marginLeft: -30,
    },
    isMimeBorder: {
      position: 'relative',
      width: windowWidth - 100,
      marginLeft: 18,
      marginRight: 5,
      marginBottom: 4,
      borderWidth: 2,
      borderColor: '#7d7d7d',
      ...commonStyles,
    },
    input: {
      fontSize: 18,
      backgroundColor: '#fff',
      paddingHorizontal: 6,
      paddingVertical: 10,
    },
    image: {
      ...commonStyles,
      width: 44,
    },
    notification: {
      marginTop: 1,
    },
    isMimeNotification: {
      marginTop: 1,
    },
  });
};
