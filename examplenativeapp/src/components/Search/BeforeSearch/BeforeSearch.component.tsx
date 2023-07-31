import React from 'react';
import { VStack, ScrollView } from 'native-base';
import {BeforeSearchBadge} from './BeforeSearchBadge.component';
import { BeforeSearchBanner } from './BeforeSearchBanner.component';

export const BeforeSearch = ({beforeSearch}:any) => {
  console.log('BeforeSearch', beforeSearch?.lastSearches)
  return (
    <ScrollView>
      <VStack space="1">
        <BeforeSearchBanner banners={beforeSearch?.banners}/>
        <BeforeSearchBadge renderItem={Object.keys(beforeSearch?.brands)} header="Popular Brands 🔥"/>
        <BeforeSearchBadge renderItem={Object.keys(beforeSearch?.keywords)} header="Popular Keywords 🔥"/>
      </VStack>
    </ScrollView>
  );
}



