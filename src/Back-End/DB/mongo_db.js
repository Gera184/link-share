const mongoose = require("mongoose");
const config = require("../Configs/config").DB;

const Loger = require("../Util/Loger");
const FormattedDate = require("../Util/time_format");
const UserSchema = require("../Schemas/user_schema");

// -----------------  SetUp
///------------------ End of SetUp

mongoose.connect(config.db_name, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
  Loger.log("Sucsses on DB Conection");

  //  --------------------- SetUp -----------------

  /* 
  const Walets = await Wallet_Schema.find({ has_cid: true });
  await Sansa.init(SheetUrl);
  Walets.forEach(async el => {
    await Sansa.AddNewRow([CleanResposn(el)]);
  });
  */

  // ---------------------  End SetUp -----------------
});

function NewUser(paylode) {
  const { username, password, role } = paylode;
  const NewUser = new UserSchema({
    user_name: username,
    password: password,
    role: role,
    isband: false,
    createdDate: FormattedDate.HumanDate(),
  });
  return NewUser;
}

module.exports = mongoose;
