const {
  databaseName,
  databaseUserName,
  databasePwd,
  databaseURL,
} = require("../config");

const Sequelize = require("sequelize");

console.log("init database config");
//init data base
const initDataBase = new Sequelize("", databaseUserName, databasePwd, {
  host: databaseURL,
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
initDataBase.query(`CREATE DATABASE IF NOT EXISTS ${databaseName};`);
