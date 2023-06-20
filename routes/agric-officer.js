const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("list of all agric officers");
});

router.post("/", async (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
