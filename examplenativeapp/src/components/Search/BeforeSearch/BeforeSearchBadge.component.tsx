//@ts-nocheck
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Stack,Badge, Heading,FlatList } from 'native-base';



export const BeforeSearchBadge = ({renderItem,header}:any) => {

  return (
    <Stack direction="column" space={3} mb={3}>
        {
          renderItem && (
       <>
        <Stack ml="2" direction="row" space={3}>
          <Heading size="md">{header}</Heading>
        </Stack>
        <Stack ml="1" direction="column" space={3}>
          {
            <FlatList
              data={renderItem}
              horizontal
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              renderItem={({item}:any,index:any) => (
                <TouchableOpacity key={index}>
                  <Badge colorScheme="coolGray" ml={1} rounded="full">{item}</Badge>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          }
        </Stack>
      </>
      )}
    </Stack>
  );
}
