const {
  validateRegister,
  validateLogin,
} = require('../validators/auth-validators');
const { User } = require('../models');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createError = require('../utils/create-error');

exports.register = async (req, res, next) => {
  try {
    const value = validateRegister(req.body);

    const user = await User.findOne({
      where: {
        [Op.or]: [{ email: value.email || '' }],
        // [Op.or]: [{ email: value.email || '' }, { mobile: value.mobile || '' }],
      },
    });
    if (user) {
      createError('email  is already in use', 400);
    }

    value.password = await bcrypt.hash(value.password, 12);
    await User.create(value);
    // const {firstname, lastname} = req.body

    // User.create()
    res
      .status(201)
      .json({ message: 'register success, please log in to continue' });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  // res.json({ key: 'test system' });
  try {
    const value = validateLogin(req.body);
    console.log(value);
    // SELECT * FROM USERS WHERE email = value.emailOrMobile )R mobile = value.emailOrMobile
    const user = await User.findOne({
      where: {
        email: value.email,
      },
    });
    if (!user) {
      createError('invalid email or password01', 400);
    }
    const isCorrect = await bcrypt.compare(value.password, user.password);
    if (!isCorrect) {
      createError('invalid email or password02', 400);
    }

    const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(200).json({ accessToken });
  } catch (err) {
    next(err);
  }
};
