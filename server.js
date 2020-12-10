const express = require("express");
const app = express();

require("dotenv").config();

const connectDB = require("./models/connectDB");
const router = require("./routes/router");

connectDB();

app.use(express.json());
app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`I'm listening on port ${process.env.PORT}`);
});
