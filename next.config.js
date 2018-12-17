const path = require('path');
const withLess = require("@zeit/next-less");
const withImages = require("next-images");

module.exports = withImages(
  withLess({
    webpack: {
      resolve: {
        alias: {
          rsuite: path.resolve(__dirname, "../rsuite")
        }
      }
    },
    lessLoaderOptions: {
      javascriptEnabled: true
    }
  })
);
