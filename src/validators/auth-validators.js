const Joi = require('joi');

const validate = require('./validate');

const registerSchema = Joi.object({
  userName: Joi.string().trim().required().messages({
    'any.required': 'first name is required',
    'string.empty': 'first name is required',
    'string.base': 'first name must be a string',
  }),
  lastName: Joi.string().trim().required().messages({
    'string.empty': 'last name is required',
  }),

  email: Joi.string()
    .email({ tlds: false })

    .messages({
      'any.required': 'must be a valid email address',
    }),
  password: Joi.string().alphanum().min(6).required().trim().messages({
    'string.empty': 'password is required',
    'string.alphanum': 'password must contain number or alphabet',
    'string.min': 'password mush have at least 6 characters',
  }),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .trim()
    .messages({
      'any.only': 'password and confirm password did not match',
      'string.empty': 'confirm password is required',
    }),
  // email: Joi.forbidden().when('email', {
  //   is: Joi.string().email({ tlds: false }),
  //   then: Joi.string().default(Joi.ref('email')),
  // }),
  // mobile: Joi.forbidden().when('emailOrMobile', {
  //   is: Joi.string().pattern(/^[0-9]{10}$/),
  //   then: Joi.string().default(Joi.ref('email')),
  // }),
});

exports.validateRegister = validate(registerSchema);

const loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

exports.validateLogin = validate(loginSchema);
