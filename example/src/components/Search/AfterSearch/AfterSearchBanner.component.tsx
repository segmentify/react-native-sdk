import React, { useEffect } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Image,  Stack,Badge } from 'native-base';

export const AfterSearchBanner = ({banners}:any) => {
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    console.log('After Search Banner', banners);
    console.log('After Search Banner Started');
    return () => {
      console.log('After Search Banner Ended');
    }
  }, []);
  
  return (
    <SwiperFlatList
      data={banners}
      index={0}
      renderItem={({item}:any) => (
        <Stack direction="column" space={3}>
          <Image source={{uri: item?.bannerUrl}}
            alt={item.name}
            size="xl"
            width={windowWidth - 8}
            height={160}
            key={item.id}
            />
          <Badge
            style={styles.bannerText}
            colorScheme="dark"
            _text={{
            fontSize: 12,
            color: '#fff',
            }}>
              {item?.name}
          </Badge>
      </Stack>
      )}
      keyExtractor={(item) => item.id}
      autoplay={true}
      autoplayDelay={3}
    />
  );
}


const styles = StyleSheet.create({
  bannerText: {
    position: 'absolute',
    bottom: 14,
    left: 0,
  }
})
