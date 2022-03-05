/** @type {import('next').NextConfig} */
fs = require("fs");
const nextConfig = {
  reactStrictMode: true,
  env: {
    rawJsFromFile: fs.readFileSync("./assets/js/plugins.js").toString(),
    rawJsFromFileMain: fs.readFileSync("./assets/js/main.js").toString(),
  },
};

module.exports = nextConfig;
