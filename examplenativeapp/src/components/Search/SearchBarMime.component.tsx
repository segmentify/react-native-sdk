import React, { useEffect, useState } from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {NotificationIcon} from '../Icons';
import {Input, SearchIcon, CloseIcon} from 'native-base';

type SearchBarMimeProps = {
  navigation: any;
  isMime?: boolean;
  onSearchHandler?: (text: string | undefined) => void;
  searchQuery?: string;
};

export const SearchBarMime = ({
  navigation,
  isMime = true,
  onSearchHandler,
  searchQuery,
}: SearchBarMimeProps) => {
  const [searchText, setSearchText] = useState<string | undefined>(searchQuery);
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    setSearchText(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    return () => {
      setSearchText('');
    };
  }, []);

  const submitSearch = () => {
    if (onSearchHandler) {
      onSearchHandler(searchText);
    }
  };

  const clearSearch = () => {
    setSearchText('');
    if (onSearchHandler) {
      onSearchHandler('');
    }
  }

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
        <Input
          editable={!isMime}
          width="100%"
          height="100%"
          placeholder="Search"
          variant="filled"
          fontSize={14}
          borderRadius="4"
          backgroundColor="white"
          borderColor="#7d7d7d"
          py="1"
          px="2"
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
          }}
          onSubmitEditing={submitSearch}
          InputLeftElement={<SearchIcon color="gray.400" size="5" ml="2" />}
          InputRightElement={searchText && searchText.length ? <CloseIcon color="gray.400" size="4" mr="3" onPress={clearSearch} /> : undefined}
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
      borderWidth: 0,
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
      borderWidth: 0,
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
