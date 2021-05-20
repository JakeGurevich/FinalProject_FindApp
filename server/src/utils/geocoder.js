const NodeGeocoder = require("node-geocoder");

const ortions = {
  provider: process.env.GEOCODER_PROVIDER,
  httpAdapter: "https",
  apiKey: null,
  fomatter: null,
};
const geocoder = NodeGeocoder(ortions);
module.exports = geocoder;
