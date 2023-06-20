const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("list of all agric officers");
});

router.post("/", async (req, res) => {});

module.exports = router;
