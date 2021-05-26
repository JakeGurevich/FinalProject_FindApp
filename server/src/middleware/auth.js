const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const NodeGeocoder = require("node-geocoder");

const options = {
  provider: "openstreetmap",

  // Optional depending on the providers

  apiKey: null,

  formatter: null, // 'gpx', 'string', ...
};

// Using callback
const auth = async (req, res, next) => {
  console.log(req.header);
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log(token);
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    console.log(decoded, token);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate" });
  }
};
module.exports = auth;
