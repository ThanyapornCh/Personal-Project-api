// const Joi = require('joi');

// const validate = require('./validate');

// const registerSchema = Joi.object({
//     questionType: Joi.string().trim().required().messages({
//     'any.required': 'first name is required',
//     'string.empty': 'first name is required',
//     'string.base': 'first name must be a string',
//   }),
//   lastName: Joi.string().trim().required().messages({
//     'string.empty': 'last name is required',
//   }),

//   email: Joi.string()
//     .email({ tlds: false })

//     .messages({
//       'any.required': 'must be a valid email address',
//     }),
//   password: Joi.string().alphanum().min(6).required().trim().messages({
//     'string.empty': 'password is required',
//     'string.alphanum': 'password must contain number or alphabet',
//     'string.min': 'password mush have at least 6 characters',
//   }),
//   confirmPassword: Joi.string()
//     .valid(Joi.ref('password'))
//     .required()
//     .trim()
//     .messages({
//       'any.only': 'password and confirm password did not match',
//       'string.empty': 'confirm password is required',
//     }),

// });
