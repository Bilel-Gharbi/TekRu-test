const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  //Server config
  PORT: process.env.PORT || 5000,

  //DataBase config
  // local url or remote url host
  databaseURL:
    process.env.DATABASE_LOCAL_HOST || process.env.DATABASE_REMOTE_HOST,
  // local user ot remote db user
  databaseUserName:
    process.env.DATABASE_USER_LOCAL ||
    process.env.DATABASE_USER_REMOTE ||
    "root",
  // local db name or remote db name
  databaseName:
    process.env.DATABASE_NAME_LOCAL ||
    process.env.DATABASE_NAME_REMOTE ||
    "TekRu",
  // local pwd or remote db pwd
  databasePwd:
    process.env.DATABASE_PWD_LOCAL || process.env.DATABASE_PWD_REMOTE || "root",

  //JWT config
  jwtSecretKey:
    process.env.JWT_SECRET_KEY || "ca85aa55d18c306b625ff69543b2d1ac",

  tokenExpDate: process.env.TOKEN_EXP_DATE || "7d",
};
