const express = require("express");
const lessonsRouter = express.Router();
const Lesson = require("../models/Lesson.model");
const auth = require("../middleware/auth");

lessonsRouter.post("/community/lesson", auth, async (req, res) => {
  console.log(req.body, req.user);
  const lesson = new Lesson({ ...req.body, owner: req.user._id });
  try {
    await lesson.save();

    res.status(201).send(lesson);
  } catch (error) {
    res.status(400).send(error);
  }
});
lessonsRouter.delete("/community/lesson/:id", auth, async (req, res) => {
  try {
    const lesson = await Lesson.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id,
    });
    if (!lesson) {
      return res.status(404).send();
    }
    res.send(lesson);
  } catch (error) {
    res.status(500).send(error);
  }
});
lessonsRouter.patch("/community/me", auth, async (req, res) => {
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
    const lesson = await Lesson.findOne({ owner: req.user._id });
    console.log(lesson);
    if (!lesson) {
      return res.status(404).send();
    }

    updates.forEach((update) => (lesson[update] = req.body[update]));
    await lesson.save();
    res.status(201).send(lesson);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = lessonsRouter;
