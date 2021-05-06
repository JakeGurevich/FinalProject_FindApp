const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
  name: {
    type: String,

    trim: true,
    default: "Хабад беАлия",
  },
  address: {
    city: {
      type: String,
      default: "Jerusalem",
    },
    street: {
      type: String,
      default: "King Gorge 770",
    },
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Community = mongoose.model("Community", communitySchema);
module.exports = Community;
