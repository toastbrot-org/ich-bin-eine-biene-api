/**
 * Handles all the API versions
 */
const router = require("express").Router();

const v1 = require("./v1/index");

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

router.use("/v1", v1);

module.exports = router;
