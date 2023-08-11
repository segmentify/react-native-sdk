<h1 align="center">Segmentify React Native SDK</h1>

<p align='center'>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.2-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D%2016.0.0-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/segmentify" target="_blank">
    <img alt="Twitter: sarpkayature" src="https://img.shields.io/twitter/follow/segmentify.svg?style=social" />
  </a>
</p>

### 🏠 [Homepage](https://www.segmentify.com)

### ✨ Description

Introducing the cutting-edge React Native app designed to revolutionize personalization and segmentation for e-commerce businesses. Our app harnesses the power of React Native, a powerful and widely adopted framework, to deliver a seamless cross-platform experience for both iOS and Android users. With our app, e-commerce businesses can now take their customer engagement and retention strategies to new heights. Gone are the days of generic marketing campaigns and one-size-fits-all approaches. Our app empowers businesses to understand their customers on a deeper level and tailor their offerings to individual preferences and behaviors.

#### Key Features

- **Personalized Recommendations**: </br> Our app leverages advanced algorithms and machine learning techniques to analyze user behavior, purchase history, and preferences. Based on these insights, it generates personalized product recommendations that are displayed within the app. This helps businesses enhance the user experience, increase conversions, and drive customer loyalty.
- **Dynamic Content**: Delivering the right content to the right audience is crucial in capturing users' attention. Our app allows businesses to dynamically update and customize app content based on user segments. Whether it's displaying targeted banners, promotional offers, or exclusive content, our app ensures that each user sees content relevant to their interests and needs.
- **Search Functionality**: Our app includes a powerful search feature that allows users to quickly find products based on their preferences. Users can search by keywords, filters, categories, or any other relevant attributes. The search results are displayed in real-time, ensuring a smooth and efficient user experience. Businesses can also utilize search analytics to gain insights into popular search terms, customer preferences, and optimize their product offerings.
- **User Segmentation**: Understanding your audience is key to effective marketing. Our app enables businesses to segment their user base using a wide range of criteria, including demographics, purchase history, engagement level, and more. This segmentation capability allows businesses to create highly targeted marketing campaigns and tailor their messaging to specific user groups, resulting in higher engagement and conversion rates.
- **A/B Testing**: Optimizing user experiences and marketing strategies is made easy with our A/B testing feature. Businesses can create multiple versions of app components, such as layouts, UI elements, or promotional content, and test them with different user segments. By measuring and analyzing user interactions and conversion rates, businesses can make data-driven decisions to continuously improve their app's performance and user satisfaction.
- **Seamless Integration**: Our React Native app seamlessly integrates with existing e-commerce platforms, ensuring a smooth and hassle-free implementation process. Whether you're using popular e-commerce platforms like Shopify or WooCommerce, our app can be easily integrated into your existing infrastructure, allowing you to leverage the power of personalization and segmentation without disrupting your current operations.
- **Analytics and Insights** : In-depth analytics and reporting provide businesses with valuable insights into user behavior, preferences, and campaign performance. Our app provides detailed analytics dashboards, allowing businesses to track key metrics, monitor the success of personalization efforts, and make data-backed decisions to optimize their marketing strategies.
- **Push Notifications**: Our app allows businesses to send personalized push notifications to their users. Businesses can create custom push notifications based on user segments, such as location, demographics, or purchase history. This enables businesses to deliver targeted messages to specific user groups, resulting in higher engagement and conversion rates.

Take your e-commerce business to new heights with our React Native app that brings personalization and segmentation to the forefront. Engage your users on a personal level, deliver relevant content, and drive conversions like never before. Stay ahead of the competition and build lasting relationships with your customers with our powerful and intuitive app..

## Prerequisites

- node >= 16.0.0
- react-native >= 0.71.8

## Install

```sh
npm install or yarn install

```

## Usage

Segmentify React Native App SDK is a React Native library that enables you to integrate Segmentify into your React Native app. It provides a simple interface for sending events and tracking user behavior.

It is already coded with React mentality.

## SegmentifyNativeProvider

As most of the React Native libraries, SegmentifyNativeProvider is the main component that you need to wrap your app with. `SegmentifyNativeProvider` is a React component that wraps your app and provides the Segmentify context. It takes the following props:

- `deviceInformation`: DeviceInformation
- `config`: Config

## Config

Config is a type that contains the following properties:

- `apiKey`: string (required)
- `dataCenterUrl`: string (required)
- `dataCenterPushUrl`: string (optional)
- `subDomain`: string (required)

This is the configuration that you can get from Segmentify.

```ts
const providerConfig = {
  config: {
    apiKey: 'your-api-key',
    dataCenterUrl: 'https://per.segmentify.com',
    subDomain: 'https://www.yoursite.com',
    dataCenterPushUrl: 'https://psh.segmentify.com',
    isApnsEnabled: false,
  },
  user: {
    userId: '',
    sessionId: '',
  },
};
```

User flow is flexible. You can use it like this as well. In this way segmentify will generate userId and sessionId for you. Also you can use bare workflow as well.
Click here for more information [Bare Workflow Usage](#bare-workflow-usage).

```ts
import { SegmentifyNativeProvider } from 'segmentify-react-native';

const MyApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <SegmentifyNativeProvider segmentifyState={providerConfig}>
      {children}
    </SegmentifyNativeProvider>
  );
};

export default MyApp;
```

## useSegmentifyNative

useSegmentifyNative is a React hook that returns the Segmentify context state. It takes no arguments. Reachable objects are as follows:

```ts
segmentify: {
  user: {
    userId: string;
    sessionId: string;
  },
  deviceInformation:{
    deviceName:string,
    deviceType:string,
    appVersion:string,
  },
  config: {
  apiKey: string,
  dataCenterUrl: string,
  subDomain: string,
  dataCenterPushUrl: string,
  isApnsEnabled: boolean,
},
}
```

```ts
import { useSegmentifyNative } from 'segmentify-react-native';

const MyComponent = () => {
  const {
    segmentify: {
      user: { userId, sessionId },
      deviceInformation: { deviceName, deviceType, appVersion },
      config: {
        apiKey,
        dataCenterUrl,
        subDomain,
        dataCenterPushUrl,
        isApnsEnabled,
      },
    },
  } = useSegmentifyNative();

  return <View />;
};
```

## Interaction with Segmentify

If you have access to Segmentify Web Push product, you will need additional steps to integrate Segmentify SDK to your application.
Please follow [here](#integrating-push-notifications) for more information.

_FireEvent_ method is used to send events to Segmentify. It takes the following arguments:

```ts
type FireEvent = {
  type: typeof SEGMENTIFY_EVENTS;
  data: TSEGMENTIFY_EVENT_PARAMETERS[typeof SEGMENTIFY_EVENTS];
};
```

```ts
import { FireEvent } from 'segmentify-react-native';

export const PRODUCT_VIEW_EVENT_EXAMPLE = {
  allSizes: ['12'],
  async: 'true',
  brand: 'NIKE',
  browser: 'Chrome',
  categories: [],
  currency: 'TRY',
  device: 'PC',
  dnt: false,
  email: '',
  experiments: {},
  ft: '2023.07.13 02:03:19.375',
  globalMode: 'REAL',
  lang: 'TR',
  mainCategory: 'Man',
  name: 'PRODUCT_VIEW',
  nextPage: false,
  noProcess: false,
  noUpdate: ['image', 'inStock', 'category', 'url', 'gender'],
  os: 'macOS',
  osversion: '10.15.7',
  pageUrl: 'your_page_url',
  params: { selectedSize: '', color: 'BEYAZ', model: 'DV3853-101' },
  paramsList: {},
  price: '3099.90',
  productId: 'DV3853.101_101',
  recommendIds: [],
  referrer: 'your_referrer_url',
  region: '',
  sessionId: '4020489616172081152',
  sizes: ['12'],
  source: 'INTERNAL',
  testMode: 'false',
  title: 'Nike Air Zoom Pegasus 40',
  tryCount: 0,
  tz: '-180',
  url: 'your_product_url',
  userAgent: 'user_agent',
  userId: '-897541074991628287',
};

const MyComponent = () => {
  FireEvent({
    type: 'PRODUCT_VIEW',
    data: PRODUCT_VIEW_EVENT_EXAMPLE,
  });

  return <View></View>;
};
```

_FireEvent_ returns promise that resolves with response object if event is sent successfully, otherwise it rejects.

All events requires userId and sessionId to be sent and event payload changes according to event type. You can find all event types and their payload from [here](<[https://segmentify.atlassian.net/wiki/spaces/SEG/pages/131072/Segmentify+Events](https://segmentify.github.io/segmentify-dev-doc/integration_web/)>).

## Bare Workflow Usage

If your workflow force you to use bare workflow, initial steps will be the same.
Our library is grants methods to use in bare workflow as well.

Bare Workflow contains manual interactions or events. Generally Segmentify handles user and session flows itself. But some times in application code we would like to be responsible for user and session flows. In this case we can use following methods.

### Requesting User Credentials

```ts
import { RequestCredentials } from 'segmentify-react-native';

RequestCredentials({
  requiredFields: 1 || 2,
});
```

Request Credentials returns a promise that resolves string array of length 1 or 2 depending on requiredFields parameter. There is no coersion in this method. Return values are alphanumeric and both values can be assigned to desidered fields.

e.g.:

```ts
const [userId, sessionId] = await RequestCredentials({
  requiredFields: 2,
});
```

Every set of credentials should be revalidated if application is deleted and reinstalled. If you want to revalidate credentials manually you can use following method above.

## Integrating Push Notifications

Segmentify Handles push notification according to your firebase integration. React Native projects requires an external package for firebase integration. You can find more information from [here](https://rnfirebase.io/). Also for push notifications you need to install [notifee](https://www.npmjs.com/package/@notifee/react-native).

### Installation Guide

```js
# Using npm
npm install --save @react-native-firebase/app
npm install --save @notifee/react-native

# Using Yarn
yarn add @react-native-firebase/app
yarn add @notifee/react-native
```

The `@react-native-firebase/app` module must be installed before using any other Firebase service.

### Android Setup

To allow the Android app to securely connect to your Firebase project, a configuration file must be downloaded and added to your project.

### Generating Android credentials

On the Firebase console, add a new Android application and enter your projects details. The `Android package name` must match your local projects package name which can be found inside of the manifest tag within the `/android/app/src/main/AndroidManifest.xml` file within your project.

Download the `google-services.json` file and place it inside of your project at the following location: `/android/app/google-services.json`.

### Configure Firebase with Android credentials

To allow Firebase on Android to use the credentials, the `google-services` plugin must be enabled on the project. This requires modification to two files in the Android directory.

First, add the `google-services` plugin as a dependency inside of your `/android/build.gradle` file:

```gradle
buildscript {
  dependencies {
    // ... other dependencies
    classpath 'com.google.gms:google-services:4.3.15'
    // Add me --- /\
  }
}
```

Lastly, execute the plugin by adding the following to your `/android/app/build.gradle` file:

```gradle
apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services' // <- Add this line
```

### iOS Setup

To allow the iOS app to securely connect to your Firebase project, a configuration file must be downloaded and added to your project, and you must enable frameworks in CocoaPods.

### Generating iOS credentials

On the Firebase console, add a new iOS application and enter your projects details. The "iOS bundle ID" must match your local project bundle ID. The bundle ID can be found within the "General" tab when opening the project with Xcode.

Download the `GoogleService-Info.plist` file.

Using Xcode, open the projects `/ios/{projectName}.xcodeproj` file (or `/ios/{projectName}.xcworkspace` if using Pods).

Right click on the project name and "Add files" to the project, as demonstrated below:

![xcode_step1](https://cdn.segmentify.com/v3/assets/add_files.png)

Select the downloaded `GoogleService-Info.plist` file from your computer, and ensure the "Copy items if needed" checkbox is enabled.

![xcode_step2](https://cdn.segmentify.com/v3/assets/added_files.png)

### Configure Firebase with iOS credentials

To allow Firebase on iOS to use the credentials, the Firebase iOS SDK must be configured during the bootstrap phase of your application.

To do this, open your `/ios/{projectName}/AppDelegate.mm` file (or `AppDelegate.m` if on older react-native), and add the following:

At the top of the file, import the Firebase SDK right after `#import "AppDelegate.h"`:

```objc
#import <Firebase.h>
```

Then, inside of the `didFinishLaunchingWithOptions` method, add the following:

```objc
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
  // Add me --- \/
  [FIRApp configure];
  // Add me --- /\
  // ...
}
```

### Altering CocoaPods to use frameworks

Beginning with firebase-ios-sdk v9+ (react-native-firebase v15+) you must tell CocoaPods to use frameworks.

Open the file `./ios/Podfile` and add this line inside your targets (right after the line calling the react native Podfile function to get the native modules config):

```objc
use_frameworks! :linkage => :static
```

To use Static Frameworks on iOS, you also need to manually enable this for the project with the following global to your `/ios/Podfile` file:

```objc
# right after `use_frameworks! :linkage => :static`
$RNFirebaseAsStaticFramework = true
```

### Possible Build Errors During iOS Setup

Notes: React-Native-Firebase uses `use_frameworks`, which has compatibility issues with Flipper, Hermes & Fabric.

`Flipper: use_frameworks` is not compatible with Flipper. You need to disable Flipper by commenting out the `:flipper_configuration` line in your Podfile.

Hermes: a fix was put in place in react-native release 0.69.1 that allows Hermes to work with `use_frameworks!`. To use `use_frameworks` with Hermes, make sure you have set static linkage with `use_frameworks! :linkage => :static`.

New Architecture: Fabric is not compatible with `use_frameworks!`. Community support to help fix `use_frameworks` support for New Architecture is welcome!

### Autolinking & rebuilding

Once the above steps have been completed, the React Native Firebase library must be linked to your project and your application needs to be rebuilt.

Users on React Native 0.60+ automatically have access to "autolinking", requiring no further manual installation steps. To automatically link the package, rebuild your project:

```js
npx react-native run-android
```

## Update Pods

```js
cd ios/
pod install --repo-update
cd ..
npx react-native run-ios
```

Once successfully linked and rebuilt, your application will be connected to Firebase using the @react-native-firebase/app module. This module does not provide much functionality, therefore to use other Firebase services, each of the modules for the individual Firebase services need installing separately.

## Background Notifications (Android Only)

Android devices have different approach for background notifications. If you want to handle background notifications you need to add following lines to your `index.js` file.

```ts
import { AppRegistry } from 'react-native';
import App from './App';
import messaging from '@react-native-firebase/messaging';
import { InitializePushService } from '@segmentify/react-native-sdk';
import { name as appName } from './app.json';

InitializePushService(messaging);

function HeadlessCheck({ isHeadless }) {
  if (isHeadless) {
    return null;
  }

  return <App />;
}

AppRegistry.registerComponent(appName, () => HeadlessCheck);
```

## Highly Recommended

Right after installing Segmentify and Firebase, you should run the following commands to make sure that everything is working properly.

```js
cd ios/
rm -rf Pods
pod deintegrate
pod install --repo-update
```

## Integrating Segmentify

Segmentify requires your firebase instance to be passed to SegmentifyProvider to execute your push flow automatically.

```ts
import messaging from '@react-native-firebase/messaging';
import { SegmentifyNativeProvider } from 'segmentify-react-native';
const providerConfig={
  .
  .
  .
}

const AppProviders =({children}:React.ReactNode)=>{
  .
  .
  .
  .

return (
    <SegmentifyNativeProvider
      segmentifyState={providerConfig}
      messaging={messaging}
    >
      {children}
    </SegmentifyNativeProvider>
  );
  )
}
```

Push Notification Features handles permissions and token generation automatically. Background and foreground events as `push-interactions` and `push-view` handled by `segmentify-react-native`. Currently we are not supporting deep linking. But we are planning to add this feature in the future.

By default mobile devices operating systems have restricted policy about requesting permissions modal customizations. But we have great news for firebase users that they can customize descriptions using `GoogleService-info.plist`(ios) or `google-services.json`(android) files.

### Android Only

You can customize your push notification title and bodies using html and inline css in segmentify campaign management tool.

### iOS Only

This is a quick guide to display an image in an incoming notification. Android handles this out of the box so this extra setup is only necessary for iOS.

| If you want to know more about the specifics of this setup read the official [Firebase](https://firebase.google.com/docs/cloud-messaging/ios/send-image?hl=tr) docs.

Before you start Be sure you already have Cloud Messaging installed and set up. In case you don't get started [here](https://rnfirebase.io/messaging/usage).

### Step 1 - Add a notification service extension

From Xcode top menu go to: `File > New > Target...`
A modal will present a list of possible targets, scroll down or use the filter to select Notification Service Extension. Press Next.

- Add a product name (use ImageNotification to follow along) and click Finish
- Enable the scheme by clicking Activate

  ![step-1](https://cdn.segmentify.com/v3/assets/ios-notification-images-step-1.gif)

### Step 2 - Add target to the Podfile

Ensure that your new extension has access to Firebase/Messaging pod by adding it in the Podfile:

- From the Navigator open the Podfile: Pods > Podfile
- Scroll down to the bottom of the file and add:

```objc
  target 'ImageNotification' do
    pod 'Firebase/Messaging', '~> VERSION_NUMBER' # eg 6.31.0
  end
```

- Make sure to change the version number `VERSION_NUMBER` with the currently installed version (check your Podfile.lock)
- Install or update your pods using `pod install` from the ios folder

  ![step-2](https://cdn.segmentify.com/v3/assets/ios-notification-images-step-2.gif)

### Step 3 - Use the extension helper

At this point everything should still be running normally. This is the final step which is invoking the extension helper.

From the navigator select your ImageNotification extension
Open the `NotificationService.m` file
At the top of the file `import FirebaseMessaging.h` right after the `NotificationService.h` as shown below

```objc
#import "NotificationService.h"
+ #import "FirebaseMessaging.h"
then replace everything from line 25 to 28 with the extension helper
- // Modify the notification content here...
- self.bestAttemptContent.title = [NSString stringWithFormat:@"%@ [modified]", self.bestAttemptContent.title];

- self.contentHandler(self.bestAttemptContent);
+ [[FIRMessaging extensionHelper] populateNotificationContent:self.bestAttemptContent withContentHandler:contentHandler];
```

![step-3](https://cdn.segmentify.com/v3/assets/ios-notification-images-step-3.gif)

Run the app and check it builds successfully – make sure you have the correct target selected. Now you can use the Notifications composer to test sending notifications with an image (300KB max size).

## Configuring Push Notifications

SegmentifyNativeProvider has optional parameter to customize your notifications.

```ts
pushNotification:{
  ios:{},
  android:{}
}
```

## Example Application

[Segmentify Demo Application](www.github.com/segmentify/segmentify-react-native-example)

## Reference

- [React Native Firebase](https://rnfirebase.io/)
- [React](https://reactnative.dev/)

## Keywords

[personalization](https://www.npmjs.com/search?q=keywords:personalization)
[recommendation](https://www.npmjs.com/search?q=keywords:recommendation)
[segmentation](https://www.npmjs.com/search?q=keywords:segmentation)
[react-native](https://www.npmjs.com/search?q=keywords:react-native)
[e-commerce](https://www.npmjs.com/search?q=keywords:e-commerce)

## 🤝 Contributors

- [@sarpkayature](https://github.com/sarpkayature)
- [@hasanugur](https://github.com/hasanugr)

Made with ❤️ by Segmentify Development Team
