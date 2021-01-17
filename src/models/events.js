const mongoose = require("mongoose");

const Events = mongoose.model(
  "events",
  mongoose.Schema({
    userid: String,
    type: String,
    content: String,
    at: String,
  })
);
Events.createCollection();

module.exports = Events;
