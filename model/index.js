// models
const User = require("./User");

//Auth model
/* ----- Auth / User association ------- */
// table relation

/* User.hasOne(Product, {
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Product.belongsTo(User); */

User.sync({ force: false });

module.exports = {
  User,
};
