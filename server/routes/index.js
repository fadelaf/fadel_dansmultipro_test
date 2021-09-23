const express = require("express");
const router = express.Router();
const apiRouter = require("./API");

router.get("/", (req, res) => {
  res.send("Hello");
});

router.use("/api", apiRouter);

module.exports = router;
