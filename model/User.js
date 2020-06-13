const { DataTypes } = require("sequelize");
const { db } = require("../config/database");

const Auth = db.define("User", {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  family_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_Login: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Auth;
