const express = require("express");
const dotenv = require("dotenv");

const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// imported routes
const agricOfficer = require("./routes/agric-officer");

app.get("/", (req, res) => {
  res.send("App is running");
});
app.use("/agric-officers", agricOfficer);

app.listen(process.env.RAILWAY_HOST, () => {
  console.log(`app listening on port:${port}`);
});
