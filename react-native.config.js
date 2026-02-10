const path = require('path');

module.exports = {
  project: {
    ios: {},
    android: {},
  },
  dependencies: {
    'react-native-gesture-handler': {
      platforms: {
        android: {
          sourceDir: 'node_modules/react-native-gesture-handler/android',
        },
      },
    },
  },
};
