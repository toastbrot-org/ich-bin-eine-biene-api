const mongoose = require("mongoose");

const Infos = mongoose.model(
  "infos",
  mongoose.Schema({
    title: String,
    content: String,
  })
);
Infos.createCollection();

module.exports = Infos;
