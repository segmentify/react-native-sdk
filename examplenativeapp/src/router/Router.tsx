import React, {useState} from 'react';
import {Providers} from '../provider/Providers';
import {Linking, Text} from 'react-native';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
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
  console.log('SearchBarComponent', props);
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
        Product: 'product/:id',
        Search: 'search',
      },
    },
    async getInitialURL() {
      // Check if app was opened from a deep link
      const url = await Linking.getInitialURL();
      if (url != null) {
        return url;
      }
      const message = await notifee.getInitialNotification();

      return message?.notification?.data?.url;
    },
    subscribe(listener: (arg0: string) => void) {
      const onReceiveURL = ({url}: {url: string}) => listener(url);
      // Listen to incoming links from deep linking
      const subscription = Linking.addEventListener('url', onReceiveURL);

      const unsubscribeNotification = messaging().onNotificationOpenedApp(
        message => {
          const url = message.data?.url;

          if (url) {
            listener(url);
          }
        },
      );

      return () => {
        subscription.remove();
        unsubscribeNotification();
      };
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
