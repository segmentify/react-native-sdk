import React, {useState} from 'react';
import {Providers} from '../provider/Providers';
import {HandleInitialNotification} from '@segmentify/react-native-sdk';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// Screens
import {Home, Product, Search} from '../screens/';

// Components
import {SearchBar} from '../components/index';

export type RootStackParamList = {
  Home: any;
  Product: any;
  Search: any;
};

const Stack = createNativeStackNavigator();

const SearchBarComponent = (props: any) => {
  return <SearchBar {...props} />;
};

export const Router = () => {
  const [searchProducts, setSearchProducts] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchBanners, setSearchBanners] = useState<any>([]);

  const linkingConfig = {
    enabled: true,
    prefixes: [
      'segmentifynativeapp://',
      'https://app.segmentifynativeapp.com',
      'http://app.segmentifynativeapp.com',
    ],
    config: {
      screens: {
        Home: 'home',
        Product: 'product/:productId',
        Search: 'search',
      },
    },
    async getInitialURL() {
      return await HandleInitialNotification();
    },
  };

  return (
    <NavigationContainer
      linking={linkingConfig}
      fallback={<Text>Loading...</Text>}>
      <Providers>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            contentStyle: {backgroundColor: '#FFFFFF'},
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () => SearchBarComponent({isMime: true}),
            }}
          />
          <Stack.Screen
            name="Product"
            component={Product}
            options={{title: 'Product Page'}}
            initialParams={{item: {}}}
          />
          <Stack.Screen
            name="Search"
            options={{
              headerTitle: () =>
                SearchBarComponent({
                  setSearchProducts,
                  searchQuery,
                  setSearchQuery,
                  setSearchBanners,
                }),
              headerTintColor: '#7d7d7d',
              headerBackTitleVisible: false,
            }}>
            {props => (
              <Search
                {...props}
                searchProducts={searchProducts}
                setSearchQuery={setSearchQuery}
                searchBanners={searchBanners}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </Providers>
    </NavigationContainer>
  );
};
