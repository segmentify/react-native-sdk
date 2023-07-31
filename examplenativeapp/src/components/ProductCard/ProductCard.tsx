import React, {useCallback} from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FireEvent, useSegmentifyStorage } from "@segmentify/react-native-sdk";
import { Box, Image, AspectRatio, Heading, Text, VStack, useToast } from "native-base";
import type { ISearchResponse } from "../../types/search-response.interface";

export const ProductCard = ({item, cardSize, isHorizontal= false}: {item: ISearchResponse, cardSize: number | string, isHorizontal?: boolean}) => {
  const toast = useToast();
  const navigation = useNavigation();
  const {segmentify: {user}} = useSegmentifyStorage();
  const { name, priceText, oldPriceText, image, brand } = item;

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
        toast.show({
          title: 'Product CLICK Event Sent',
          description: 
            'productId: ' + item.productId + '\n' +
            'userId: ' + user?.userId + '\n' +
            'sessionId: ' + user?.sessionId,
          placement: 'bottom',
        });
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
        <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1">
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image source={{uri: image}} alt={name} resizeMode="cover" />
            </AspectRatio>
          </Box>
          <VStack p="4" space={3}>
            <VStack space={2}>
              <Heading size="xs" ml="-1">{name.length > 50 ? name.substring(0, 50) + "..." : name}</Heading>
              <Text fontSize="xs" fontWeight="600" letterSpacing="0.6" ml="-0.5" mt="-1" color="red.800">{brand}</Text>
            </VStack>
            <VStack justifyContent="space-between" mt="4" alignItems="flex-end">
              {oldPriceText && 
                <Box>
                  <Text fontSize="sm" fontWeight="400" color="gray.500" strikeThrough>{oldPriceText}</Text>
                </Box>
              }
              <Box>
                <Text fontSize="md" fontWeight="600" color={oldPriceText ? "green.600" : "gray.500"}>{priceText}</Text>
              </Box>
            </VStack>
          </VStack>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};