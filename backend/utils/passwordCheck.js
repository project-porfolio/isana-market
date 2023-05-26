const bycrypt = require("bcrypt");
const userModel = require("../models/users");

const passwordCheck = async (username, password) => {
  const userData = await userModel.findOne({ where: { username: username } });
  const compare = await bycrypt.compare(password, userData.password);
  return { compare, userData };
};

module.exports = passwordCheck;
