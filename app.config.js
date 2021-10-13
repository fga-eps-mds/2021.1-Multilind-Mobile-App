export default {
  expo: {
    name: 'multilind-frontend',
    slug: 'multilind-frontend',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
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
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
      package: 'com.gabrieldvpereira.multilindfrontend',
    },
    web: {
      favicon: './assets/favicon.png',
    },
  },
};
