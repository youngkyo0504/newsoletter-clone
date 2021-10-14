const path = require("path");

module.exports = {
  entry: "./assets/js/subscribe.js",
  output: {
    path: path.resolve(__dirname, "./assets/js"),
    filename: "app.js",
  },
};
