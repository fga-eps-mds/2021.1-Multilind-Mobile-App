export default {
  expo: {
    name: 'Multilind',
    slug: 'Multilind',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    splash: {
      image: './src/assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#338BAE',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    android: {
      permissions: ['ACCESS_BACKGROUND_LOCATION'],
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#338BAE',
      },
      package: 'com.gabrieldvpereira.multilindfrontend',
    },
    web: {
      favicon: './assets/favicon.png',
    },
  },
};
