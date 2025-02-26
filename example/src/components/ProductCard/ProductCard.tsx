import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FireEvent, useSegmentifyStorage} from '@segmentify/react-native-sdk';
import {
  Box,
  Image,
  AspectRatio,
  Heading,
  Text,
  VStack,
} from 'native-base';
import type {ISearchResponse} from '../../types/search-response.interface';
import {useToast} from 'react-native-toast-notifications';

export const ProductCard = ({
  item,
  cardSize,
  isHorizontal = false,
}: {
  item: ISearchResponse;
  cardSize: number | string;
  isHorizontal?: boolean;
}) => {
  const toast = useToast();
  const navigation = useNavigation();
  const {
    segmentify: {user},
  } = useSegmentifyStorage();
  const {name, priceText, oldPriceText, image, brand} = item;

  const onClickHandler = useCallback(
    async (item: ISearchResponse) => {
      FireEvent({
        type: 'INTERACTION',
        eventPayload: {
          name: 'INTERACTION',
          type: 'CLICK',
          productId: item.productId,
          userId: user?.userId,
          sessionId: user?.sessionId,
        },
      }).then(() => {
        toast.show(
          "",
          {
            type: "custom_toast",
            animationDuration: 100,
            data: {
              title: 'Product CLICK Event Sent',
              messages: {
                'productId': item.productId,
                'userId': user?.userId,
                'sessionId': user?.sessionId,
              }
            },
          }
        )
        console.log('Product CLICK Event Sent');
      });
      // @ts-ignore
      navigation.navigate('Product', {item});
    },
    [user, navigation],
  );

  return (
    <Box w={cardSize} px={2} mb={isHorizontal ? 0 : 4}>
      <TouchableOpacity onPress={() => onClickHandler(item)}>
        <Box
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          height={250}
          borderWidth="1">
          <Box pt={2}>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image source={{uri: image}} alt={name} resizeMode="cover" />
            </AspectRatio>
          </Box>
          <VStack p="4" space={3}>
            <VStack space={1}>
              <Heading size="xs" numberOfLines={2}>
                {name}
              </Heading>
              <Text
                fontSize="xs"
                fontWeight="600"
                letterSpacing="0.6"
                ml="0.5"
                color="red.800">
                {brand}
              </Text>
            </VStack>
            <VStack justifyContent="space-between" pt={1} alignItems="flex-end">
              {oldPriceText && (
                <Box>
                  <Text
                    fontSize="sm"
                    fontWeight="400"
                    color="gray.500"
                    strikeThrough>
                    {oldPriceText}
                  </Text>
                </Box>
              )}
              <Box>
                <Text
                  fontSize="md"
                  fontWeight="600"
                  color={oldPriceText ? 'green.600' : 'gray.500'}>
                  {priceText}
                </Text>
              </Box>
            </VStack>
          </VStack>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};
