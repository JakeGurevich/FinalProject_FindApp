const express = require("express");
const lessonsRouter = express.Router();
const Lesson = require("../models/Lesson.model");
const auth = require("../middleware/auth");

lessonsRouter.post("/community/lesson", auth, async (req, res) => {
  console.log(req.body);
  const lesson = new Lesson({ ...req.body, owner: req.user._id });
  try {
    await community.save();

    res.status(201).send(community);
  } catch (error) {
    res.status(400).send(error);
  }
});
communityRouter.patch("/community/me", auth, async (req, res) => {
  console.log(req.body);
  const updates = Object.keys(req.body);
  console.log(updates);
  const allowedUpdates = ["name", "rabbi", "type", "description", "address"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates" });
  }

  try {
    const community = await Community.findOne({ owner: req.user._id });
    console.log(community);
    if (!community) {
      return res.status(404).send();
    }

    updates.forEach((update) => (community[update] = req.body[update]));
    await community.save();
    res.status(201).send(community);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = communityRouter;
