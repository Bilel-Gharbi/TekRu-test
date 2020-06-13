const userRouter = require("express").Router();
const { verifyToken } = require("../middleware/jwt"); // route middleware
//schema validator middleware
const {
  validateLoginSchema,
  validateSignUpSchema,
} = require("../middleware/validator");

//import userController as controller
const { userController: controller } = require("../controller");

//to stay logged if verify token
userRouter.route("/").get(verifyToken, controller.getUserProfile);

userRouter.route("/signup").post(validateSignUpSchema, controller.signUp);
userRouter.route("/login").post(validateLoginSchema, controller.login);

userRouter.route("/data").get(verifyToken, controller.getAllUser);

userRouter.route("/test").get(verifyToken, controller.test);

module.exports = userRouter;
