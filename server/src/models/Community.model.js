const mongoose = require("mongoose");

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

const Community = mongoose.model("Community", communitySchema);
module.exports = Community;
