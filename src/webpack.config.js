const path = require("path");

module.exports = {
  entry: "./src/index.js", // Specify the entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Specify the output directory
    filename: "bundle.js", // Specify the output file name
  },
  // Add additional configuration options as needed
};
