const auth_routes = require("./allRoutes/auth_routes");
const register_routes = require("./allRoutes/regester_routs");
const  time_routes= require("./allRoutes/timer_routs")

const allroutes = [
  {
    file: auth_routes,
    path: "/account",
  },
  {
    file: register_routes,
    path: "/account",
  },
  {
    file: time_routes,
    path: "/link",
  },
];
module.exports = allroutes;
