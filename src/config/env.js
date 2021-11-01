import Constants from 'expo-constants';

const ENV = {
  dev: {
    development: true,
    contentServer: `https://multilind-content-stagging.herokuapp.com/`,
    imagesServer: `http://192.168.15.14:5000`,
  },
  staging: {
    staging: true,
    contentServer: 'https://multilind-content-stagging.herokuapp.com/',
    imagesServer: 'https://multlind-files-prod.herokuapp.com/',
  },
  prod: {
    production: true,
    contentServer: 'https://multilind-content-prod.herokuapp.com/',
    imagesServer: 'https://multlind-files-prod.herokuapp.com/',
  },
};

function getEnvVars(env = '') {
  if (env === null || env === undefined || env === '') {
    return ENV.dev;
  }
  if (env.indexOf('dev') !== -1) {
    return ENV.dev;
  }
  if (env.indexOf('prod') !== -1) {
    return ENV.prod;
  }
  if (env.indexOf('staging') !== -1) {
    return ENV.staging;
  }
  return ENV.dev;
}

export default getEnvVars('staging');
