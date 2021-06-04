const express = require("express");
const router = express.Router();
var ip = require("ip");

router.get("/", (req, res, next) => {
  res.status(200).json({
    service: "online",
    ip: ip.address(),
  });
});

module.exports = router;

