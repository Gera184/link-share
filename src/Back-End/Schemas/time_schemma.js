const mongoose = require("mongoose");
const TimerSchema = mongoose.Schema;

const Timer = new TimerSchema({
  link: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  createdDate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("time", Timer);
