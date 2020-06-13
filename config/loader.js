const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const { databaseConnection } = require("./database");

const appRoutesV1 = require("../api");

//app middleware
module.exports = async (app) => {
  databaseConnection(); //database connection

  //App middleware
  app.use(express.json());
  app.use(cors("*"));
  app.use(logger("dev"));

  //api route
  app.use("/api/v1/", [...appRoutesV1]);
};
