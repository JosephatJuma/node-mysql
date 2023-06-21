const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", async (req, res) => {
  res.send("list of all agric officers");
});

router.post("/", async (req, res) => {
  const sql =
    "INSERT INTO agricultural_officer (id,username,name, password) VALUES (?,?,?,?)";
  await db
    .query(
      sql,
      [req.body.id, req.body.username, req.body.name, req.body.password],
      (error, result) => {
        if (error) res.send(error);
      }
    )
    .then(() => {
      res.send("Agircultural Officer added");
    })
    .catch((err) => {
      res.send(err.message);
    });
});

module.exports = router;
