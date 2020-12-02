/**
 * Handles the API v1 functions (infos)
 */
const router = require("express").Router();

const InfoHandler = require("./Infos/index");

router.use("/infos", InfoHandler);

module.exports = router;
