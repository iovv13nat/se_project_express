const express = require("express");
const mongoose = require("mongoose");
const mainRouter = require("./routes/index");

const { PORT = 3001 } = process.env;
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  req.user = { _id: "68210dfee1f86ba4465c6e76" };
  next();
});
app.use(mainRouter);

app.use((req, res) => {
  res.status(404).send({ message: "Requested resources not found" });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/wtwr_db")
  .then(() => {})
  .catch(console.error);

app.listen(PORT);
