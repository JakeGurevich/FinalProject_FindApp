const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const usersRouter = require("./src/routes/users");
const communityRouter = require("./src/routes/communities");
const lessonsRouter = require("./src/routes/lessons");
const dotenv = require("dotenv");
const publicDirectory = path.join(__dirname, "../client/build");
dotenv.config({ path: "./src/config/config.env" });
const app = express();
const connectDB = require("./src/db/mongoose");
connectDB();
//! app.use(cors()) MUST be BEFORE using routers
app.use(express.json());
app.use(express.static(publicDirectory));
app.use(cors());
app.use("/api", usersRouter);
app.use("/api", lessonsRouter);
app.use("/api", communityRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
