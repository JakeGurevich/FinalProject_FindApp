const express = require("express");
const communityRouter = express.Router();
const Community = require("../models/Community.model");
const Lesson = require("../models/Lesson.model");
const auth = require("../middleware/auth");

communityRouter.get("/communities/me", auth, async (req, res) => {
  try {
    const community = await Community.findOne({
      owner: req.user._id,
    }).populate("owner");
    const lessons = await Lesson.find({
      owner: req.user._id,
    });
    const sendData = { ...community, lessons: lessons };
    console.log(lessons);
    res.send({ community, lessons });
  } catch (error) {
    res.status(404).send(error);
  }
});
communityRouter.get("/community/:handle", async (req, res) => {
  console.log(req.params.handle);
  try {
    const community = await Community.findOne({
      name: req.params.handle,
    }).populate("owner");
    const lessons = await Lesson.find({
      owner: community.owner._id,
    });
    const sendData = { ...community, lessons: lessons };
    console.log(lessons);
    res.send({ community, lessons });
  } catch (error) {
    res.status(404).send(error);
  }
});

communityRouter.get("/communities", async (req, res) => {
  try {
    const communities = await Community.find().populate("owner");
    res.send(communities);
  } catch (error) {
    res.status(404).send(error);
  }
});
communityRouter.post("/communities", auth, async (req, res) => {
  console.log(req.body);
  const community = new Community({ ...req.body, owner: req.user._id });
  try {
    await community.save();

    res.status(201).send({ status: "succsess" });
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
