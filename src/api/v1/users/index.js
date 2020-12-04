const router = require("express").Router();
const validator = require("uuid").validate;
const users = require("./../../../models/users");
const cors = require("cors");

const secrets = require("../../../secrets.json");

router.use(require("body-parser").json());

router.get("/get", async (req, res, next) => {
  const result = await users.find();
  res.status(200);
  res.send({ status: "ok", result });
});

router.get("/deleteall", async (req, res, nect) => {
  if (req.query.secret == secrets.deleteApiKey) {
    await users.deleteMany();
    res.send({ status: "ok" });
  } else {
    res.send({ status: "fail", reason: "Missing Permission" });
  }
});

router.all("/update", async (req, res, next) => {
  if (
    req.query.userid &&
    req.query.autoRotatingBeeLength &&
    req.query.additionalBeeLength &&
    req.query.multiplierLevel
  ) {
    if (validator(req.query.userid)) {
      await users.updateOne(
        { _id: req.query.userid },
        {
          autoRotatingBeeLength: req.query.autoRotatingBeeLength,
          additionalBeeLength: req.query.additionalBeeLength,
          multiplierLevel: req.query.multiplierLevel,
        },
        { upsert: true }
      );
      res.send({ status: "ok" });
    } else {
      res.send({ status: "fail", error: "Userid false" });
    }
  } else {
    res.send({ status: "fail", error: "Missing Parameters" });
  }
});

router.all("/update2", async (req, res, next) => {
  if (
    req.body &&
    req.body.userid != undefined &&
    req.body.autoRotatingBeeLength != undefined &&
    req.body.additionalBeeLength != undefined &&
    req.body.multiplierLevel != undefined
  ) {
    if (validator(req.body.userid)) {
      await users.updateOne(
        { _id: req.body.userid },
        {
          autoRotatingBeeLength: req.body.autoRotatingBeeLength,
          additionalBeeLength: req.body.additionalBeeLength,
          multiplierLevel: req.body.multiplierLevel,
        },
        { upsert: true }
      );
      res.send({ status: "ok" });
    } else {
      res.send({ status: "fail", error: "Userid false" });
    }
  } else {
    res.send({
      status: "fail",
      error: "Missing Parameters",
      got: req.body,
      notdead: true,
      userid: req.body,
      autorotbele: req.body.autoRotatingBeeLength,
    });
  }
});

module.exports = router;
