const mongoose = require("mongoose");
const usersv1 = mongoose.model(
  "usersv1",
  mongoose.Schema({
    _id: String,
    autoRotatingBeeLength: Number,
    additionalBeeLength: Number,
    multiplierLevel: Number,
    userName: String,
    lastUpdate: String,
  })
);

usersv1.createCollection();

module.exports = usersv1;
