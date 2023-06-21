const dotenv = require("dotenv");
const mysql = require("mysql2");

dotenv.config();
const database = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
  })
  .promise();

module.exports = database;
