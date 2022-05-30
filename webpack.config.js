const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",

  entry: "./assets/js/subscribe.js",
  output: {
    path: path.resolve(__dirname, "./assets/js"),
    filename: "app.js",
  },
};
