//user services
const { User } = require("../model");
const bcrypt = require("bcryptjs");
const { signNewToken, CustomError } = require("../utils");

const login = async (data) => {
  const { email, password } = data;

  let token;
  let _user = await User.findOne({ where: { email } });
  if (_user) {
    const correctPassword = await bcrypt.compare(password, _user.password);
    if (correctPassword) {
      //create new token
      token = await signNewToken({ userId: _user.id });
    } else {
      //return error to handle it in the client
      throw new CustomError(
        "login",
        "password",
        "user service",
        "Incorrect password try again"
      );
    }
    const userData = {
      name: _user.name,
      family_name: _user.family_name,
      last_Login: _user.last_Login,
    };
    //update login date
    await _user.update({ last_Login: new Date() });
    return {
      token,
      email,
      userData,
    };
  }
  //if no user
  throw new CustomError("login", "email", "user service", "User doesn't exist");
};

//fetch current user data
const getUserProfile = async (id) => {
  const _user = await User.findOne({ where: { id } });
  const userData = {
    name: _user.name,
    family_name: _user.family_name,
    last_Login: _user.last_Login,
  };
  await _user.update({ last_Login: new Date() });
  //create new token
  let token = await signNewToken({ userId: _user.id, email: _user.email });
  return { token, email: _user.email, userData };
};

const signUp = async (data) => {
  const { email, password } = data;
  let _newUser;
  const _exist = await User.findOne({ where: { email } });

  if (!_exist) {
    //hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 12);
    data.password = hashedPassword;
    _newUser = await User.create({ ...data });
    await _newUser.update({ last_Login: new Date() });

    //create token
    let token = await signNewToken({
      userId: _newUser.id,
      email,
    });

    const userData = {
      name: _newUser.name,
      family_name: _newUser.family_name,
      last_Login: _newUser.last_Login,
    };

    return { token, email, userData };
  }
  //if address email exist return an error
  throw new CustomError(
    "signup",
    "email",
    "user service",
    "Address mail already exist"
  );
};

const getAllUser = async (id) => {
  try {
    let _users = await User.findAll({
      attributes: ["id", "name", "family_name", "email", "last_Login"],
      row: true,
    });
    const users = _users.filter((user) => user.id !== id);

    return users;
  } catch (err) {
    console.log("AuthService / login  Error ", err);
  }
};

const createUser = async (AuthId) => {
  try {
    let profile = await User.findOne({ where: { AuthId: AuthId } });

    let auth = await Auth.findByPk(AuthId);

    return { profile, email: auth.email };
  } catch (err) {
    console.log("AuthService / login  Error ", err);
  }
};

const updateUser = async (AuthId) => {
  try {
    let profile = await User.findOne({ where: { AuthId: AuthId } });

    let auth = await Auth.findByPk(AuthId);

    return { profile, email: auth.email };
  } catch (err) {
    console.log("AuthService / login  Error ", err);
  }
};

const deleteUser = async (AuthId) => {
  try {
    let profile = await User.findOne({ where: { AuthId: AuthId } });

    let auth = await Auth.findByPk(AuthId);

    return { profile, email: auth.email };
  } catch (err) {
    console.log("AuthService / login  Error ", err);
  }
};
module.exports = {
  signUp,
  login,
  getUserProfile,
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
};
