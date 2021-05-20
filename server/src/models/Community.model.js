const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

const communitySchema = new mongoose.Schema(
  {
    name: {
      type: String,

      trim: true,
      default: "Хабад беАлия",
    },
    rabbi: { type: String },
    description: {
      type: String,
      default: "У нас очень дружная община ",
    },
    type: { type: String },
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
    lessons: [
      {
        lesson: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Lesson",
        },
      },
    ],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);
communitySchema.pre("save", async function (next) {
  const loc = await geocoder.geocode("Ha-Gefen Street 12, Nof HaGalil");
  console.log(loc);
});

const Community = mongoose.model("Community", communitySchema);
module.exports = Community;
