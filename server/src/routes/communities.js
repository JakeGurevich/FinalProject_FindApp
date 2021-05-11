const express = require("express");
const communityRouter = express.Router();
const Community = require("../models/Community.model");
const auth = require("../middleware/auth");

communityRouter.get("/communities/me", auth, async (req, res) => {
  try {
    const communities = await Community.findById({ _id: req.user_id }).populate(
      "owner"
    );
    res.send(communities);
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

    res.status(201).send(community);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = communityRouter;
