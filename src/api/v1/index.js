/**
 * Handles the API v1 functions (infos, users)
 */
const router = require("express").Router();

const InfoHandler = require("./Infos/index");
const userHandler = require("./users/index");

router.use("/infos", InfoHandler);
router.use("/users", userHandler);
module.exports = router;
