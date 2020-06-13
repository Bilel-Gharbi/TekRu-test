const { userServices: service } = require("../service");

const signUp = async (req, res) => {
  try {
    let result = await service.signUp(req.body);

    res.status(201).json({
      status: "success",
      msg: "new user created",
      result,
    });
  } catch (err) {
    res.status(400).json({ status: "fail", err });
  }
};

const login = async (req, res) => {
  try {
    let result = await service.login(req.body);

    res.status(201).json({
      status: "success",
      msg: "user logged",
      result,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ status: "fail", err });
  }
};

const getUserProfile = async (req, res) => {
  try {
    let result = await service.getUserProfile(req.userId);

    res.status(201).json({
      status: "success",
      msg: "stay logged",
      result,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ status: "fail", err });
  }
};

const getAllUser = async (req, res) => {
  try {
    let result = await service.getAllUser(req.userId);

    res.status(201).json({
      status: "success",
      msg: "test route",
      result,
    });
  } catch (err) {
    res.status(401).json({ status: "fail", err: err.message });
  }
};
const test = async (req, res) => {
  try {
    let result = await service.getAllUser(req.userId);

    res.status(201).json({
      status: "success",
      msg: "test route",
      result,
    });
  } catch (err) {
    res.status(401).json({ status: "fail", err: err.message });
  }
};

module.exports = {
  signUp,
  login,
  getUserProfile,
  getAllUser,
  test,
};
