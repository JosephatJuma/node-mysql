const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//imported routes
const agricOfficer = require("./routes/agric-officer");
app.get("/", (req, res) => {
  res.send("App is running");
});
app.use("/agric-officers", agricOfficer);

app.listen(port, () => {
  console.log(`app listening on port:${port}`);
});
