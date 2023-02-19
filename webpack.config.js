const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
