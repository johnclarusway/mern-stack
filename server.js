const express = require("express");
const app = express();

require("dotenv").config();

const connectDB = require("./models/connectDB");
const router = require("./routes/router");

connectDB();
app.use("/api", router);

app.listen(5000, () => {
  console.log("I'm listening on port 5000");
});
