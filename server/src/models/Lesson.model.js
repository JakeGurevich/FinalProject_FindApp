const mongoose = require("mongoose");
const geocoder = require("../utils/geocoder");

const lessonSchema = new mongoose.Schema(
  {
    name: {
      type: String,

      trim: true,
      default: "Недельная глава",
    },
    time: { type: String },
    day: { type: String },
    description: {
      type: String,
      default: "Очень познавательный урок ",
    },

    owner: { type: mongoose.Schema.Types.ObjectId, ref: "Community" },
  },
  {
    timestamps: true,
  }
);

const Lesson = mongoose.model("Lesson", lessonSchema);
module.exports = Lesson;
