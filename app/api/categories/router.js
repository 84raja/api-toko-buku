const express = require("express");
const router = express.Router();

router.get("/categories", (req, res, next) => {
  res.status(200).json({ msg: "categories" });
});

module.exports = router;
