import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Image} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {FireEvent} from 'react-native-sdk';
import {PRODUCT_VIEW_EVENT_EXAMPLE} from '../example/events';
import {SECONDARY_COLOR, TERTIARY_COLOR} from '../constants';

export const ParallaxCarousel = ({
  productArray,
  navigation,
  title,
  autoplayDelay = 3,
  autoplayLoop = true,
  autoPlay = true,
  startIndex = 2,
  showPagination = true,
}: {
  productArray: any[];
  navigation: any;
  title: string;
  autoplayDelay?: number;
  autoplayLoop?: boolean;
  autoPlay?: boolean;
  startIndex?: number;
  showPagination?: boolean;
}) => {
  const onPressHandler = async (item: any) => {
    await FireEvent({
      type: 'PRODUCT_VIEW',
      eventPayload: PRODUCT_VIEW_EVENT_EXAMPLE,
    }).then(response => {
      console.log('PRODUCT_VIEW response', response);
      navigation.navigate('Product', {item});
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.Text}>{title}</Text>
        <SwiperFlatList
          autoplay={autoPlay}
          autoplayDelay={autoplayDelay}
          autoplayLoop={autoplayLoop}
          index={startIndex}
          showPagination={showPagination}
          paginationStyleItem={styles.paginationStyleItem}
          paginationActiveColor={SECONDARY_COLOR}
          data={productArray}
          renderItem={({item}) => (
            <View key={item.productId}>
              <TouchableOpacity onPress={() => onPressHandler(item)}>
                <Image source={{uri: item.image}} style={styles.image} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Text: {
    color: TERTIARY_COLOR,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 6,
  },
  container: {backgroundColor: '#FFFFFF', marginTop: 20},
  image: {width: 400, height: 240},
  paginationStyleItem: {
    width: 12,
    height: 12,
    borderRadius: 10,
    margin: 5,
  },
});
