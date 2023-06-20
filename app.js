const express = require("express");
const app = express();
const port = 3000;

//imported routes
const agricOfficer = require("./routes/agric-officer");

app.use("/agric-officers", agricOfficer);

app.listen(port, () => {
  console.log(`app listening on port:${port}`);
});
