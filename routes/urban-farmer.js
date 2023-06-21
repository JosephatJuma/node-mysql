const express = require("express");
const router = express.Router();
const db = require("../database");

router.get("/", async (req, res) => {});

router.post("/", async (req, res) => {
  const qurey =
    "INSERT INTO urban_farmer (id, name, username, password) VALUSE  (?,?,?,?)";
});
