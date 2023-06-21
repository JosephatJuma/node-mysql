const express = require("express");
const router = express.Router();

const agric_officer = require("./agric-officer");
router.get("/", (req, res) => {
  res.send("API is working well!");
});

router.use("/agric-officer", agric_officer);

module.exports = router;
