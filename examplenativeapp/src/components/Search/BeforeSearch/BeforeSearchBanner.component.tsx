import React from 'react';
import { StyleSheet } from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import { Image,  Stack,Badge } from 'native-base';

export const BeforeSearchBanner = ({banners}:any) => {
  return (
    <SwiperFlatList
      data={banners}
      index={0}
      renderItem={({item}:any) => (
        <Stack direction="column" space={3}>
          <Image source={{uri: item?.bannerUrl}}
            alt={item.name}
            size="xl"
            width={420}
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
