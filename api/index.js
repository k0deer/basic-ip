const express = require("express");
const router = express.Router();
var ip = require("ip");

router.get("/", (req, res, next) => {
  res.send("service online : " + ip.address());
});

module.exports = router;

