const express = require("express");
const app = express();
const mongoose = require("mongoose");

const apiHandler = require("./src/api/index");

const morgan = require("morgan");

mongoose.connect("mongodb://192.168.178.53:26001/ichbineinebieneinfos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan("combined"));

app.get("/", (req, res, next) => {
  res.send(
    "Die API ist nichts für kleine Kinder, aber scheue nicht kontakt mit dem Entwickler aufzunehmen"
  );
});

app.use("/api", apiHandler);

app.listen(4000, () => {
  console.log("Listening for clients lol");
});
