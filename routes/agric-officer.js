const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", async (req, res) => {
  try {
    const sql = "SELECT * FROM agricultural_officer";
    const result = await db.query(sql);
    res.json(result[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const sql =
      "INSERT INTO agricultural_officer (id, username, name, password) VALUES (?, ?, ?, ?)";
    await db.query(sql, [
      req.body.id,
      req.body.username,
      req.body.name,
      req.body.password,
    ]);
    res.send("Agricultural Officer added");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
