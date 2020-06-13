const { Sequelize } = require("sequelize");

const {
  databaseUserName,
  databasePwd,
  databaseURL,
  databaseName,
} = require("../config");

//db or sequelize config

let db = new Sequelize(databaseName, databaseUserName, databasePwd, {
  host: databaseURL,
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const databaseConnection = async () => {
  try {
    //database connection
    await db.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
};

module.exports = { databaseConnection, db };
