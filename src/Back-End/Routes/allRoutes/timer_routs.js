const express = require("express");
const routes = express.Router();
const FormattedDate = require("../../Util/time_format");
const Loger = require("../../Util/Loger");
const Timer = require("../../Schemas/time_schemma");

routes.post("/add", async (req, res) => {
  try {
    const AAA = await creat_new_time(req.body).save();
    res.status(200).json({ sucsses: true, msg: "Whoop Whoop" });
    Loger.log("updaet suscses");
  } catch (err) {
    console.log(err);
    // console.log('peter sucks ass ');
    Loger.errlog(":(");
  }
});

routes.get("/times", async (req, res) => {
  try {
    const links = await Timer.find();
    res.status(200).json({ sucsses: true, msg: "times", data: links });
    Loger.log("get links");
  } catch (err) {
    Loger.errlog("Error on createUser");
    console.log(err);
    res.status(500).json({ sucsses: false, msg: "fail" });
  }
});

function creat_new_time(paylode) {
  //   console.log(paylode)

  const { link, user, description } = paylode;
  const Time = new Timer({
    link: link,
    user: user,
    description: description,
    createdDate: FormattedDate.HumanDate(),
  });

  return Time;
}

module.exports = routes;
