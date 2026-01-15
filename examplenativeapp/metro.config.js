const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    ...defaultConfig.resolver,
    resolveRequest: (context, moduleName, platform) => {
      // Fix for @react-native-firebase/messaging modular imports
      // The modular/index.js tries to import from '..' which should resolve to lib/index.js
      if (
        context.originModulePath &&
        context.originModulePath.includes('@react-native-firebase/messaging/modular') &&
        moduleName === '..'
      ) {
        const messagingPath = path.resolve(
          __dirname,
          'node_modules/@react-native-firebase/messaging/lib/index.js'
        );
        return {
          filePath: messagingPath,
          type: 'sourceFile',
        };
      }
      // Use default Metro resolver
      if (defaultConfig.resolver && defaultConfig.resolver.resolveRequest) {
        return defaultConfig.resolver.resolveRequest(context, moduleName, platform);
      }
      // Fallback to default resolution
      return context.resolveRequest(context, moduleName, platform);
    },
    // Add react-dom to extraNodeModules for React Native compatibility
    extraNodeModules: {
      ...defaultConfig.resolver?.extraNodeModules,
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
    },
  },
};

module.exports = mergeConfig(defaultConfig, config);
