const express = require("express");
const usersRouter = express.Router();
const User = require("../models/User.model");
const auth = require("../middleware/auth");

usersRouter.get("/users/me", auth, async (req, res) => {
  try {
    await req.user.populate("communities").execPopulate();
    res.send(req.user);
  } catch (error) {
    res.status(500).send();
  }
});
usersRouter.post("/users", async (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();

    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});
usersRouter.post("/users/login", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});
usersRouter.post("/users/logout", auth, async (req, res) => {
  try {
    console.log(req.token);
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();
    // console.log(req.user.tokens, req.token);
    res.send();
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = usersRouter;
