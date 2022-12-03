"use strict";
const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const app = express();

const router = express.Router();
router.get("/", (req, res) => {
  res.json({ msg: "<h1>Hello from Express.js!</h1>" });
});
app.use("/.netlify/functions/server", router); // path must route to lambda
// app.use("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));

module.exports = app;
module.exports.handler = serverless(app);
