const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const routes = express.Router();
const User = require("../../Schemas/user_schema");

const JWT_consfig = require("../../Configs/config").JWT;

const Loger = require("../../Util/Loger");

routes.post("/login", async (req, res) => {


  console.log(req.body)
  const { user_name, password } = req.body;
  const user = await User.findOne({ user_name: user_name, isband: false });
  if (!user) {
    res.json({ success: false, msg: "Auth Fail" });
    Loger.errlog(`Error log in username `);
  } else {
    bcrypt.compare(password, user.password, (err, bcryptres) => {
      if (err) {
        res.json({
          success: false,
          msg: "Auth Fail"
        });
        Loger.errlog(`Error log in `);
        console.log(err);
      } else {
        if (bcryptres) {
          const userToken = {
            id: user.user_id,
            user_name: user.user_name,
            role: user.role
          };
          jwt.sign(userToken, JWT_consfig.Secret, (err, token) => {
            if (err) {
              res.json({ success: false, msg: "Auth Fail" });
              Loger.errlog("Auth Fail Token");
            } else {

              console.log("this is the JWT",token)
              console.log("this is the user OBJ", userToken)
              res.json({
                success: true,
                msg: "log in ",
                user: userToken,
                token: token
              });
              Loger.log(`user ${user_name} log in `);
            }
          });
        } else {
          res.json({ success: false, msg: "Auth Fail " });
          Loger.errlog(`Error log in password`);
        }
      }
    });
  }
});

module.exports = routes;
