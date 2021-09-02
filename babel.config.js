/* eslint-disable func-names */
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.jsx'],
          alias: {
            _test: './src/test',
            _components: './src/components',
            _navigation: './src/navigation',
            _screens: './src/screens',
            _services: './src/services',
            _utils: './src/utils',
            _atoms: './src/components/atoms',
            _molecules: './src/components/molecules',
            _templates: './src/components/templates',
            _organisms: './src/components/organisms',
          },
        },
      ],
    ],
  };
};
