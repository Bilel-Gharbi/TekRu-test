const Joi = require("@hapi/joi");

//schema validator
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const signupSchema = Joi.object({
  name: Joi.string().required(),
  family_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().strict(),
});

//login validator
const validateLoginSchema = async (req, res, next) => {
  try {
    await loginSchema.validateAsync(req.body);
    next();
  } catch (error) {
    res.json({ error: error.details[0].message });
  }
};

//signup validator
const validateSignUpSchema = async (req, res, next) => {
  try {
    await signupSchema.validateAsync(req.body);
    next();
  } catch (error) {
    res.json({ error: error.details[0].message });
  }
};

module.exports = { validateLoginSchema, validateSignUpSchema };
