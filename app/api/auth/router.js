const express = require("express");
const router = express.Router();

router.get("/auth", function (req, res, next) {
  res.status(200).json({ msg: "Router auth" });
});

module.exports = router;
