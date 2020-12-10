const express = require("express");

const app = express();

const router = require("./routes/router");

app.use("/", router);

app.listen(5000, () => {
  console.log("I'm listening on port 5000");
});
