const { validateRegister } = require('../validators/auth-validators');
const { User } = require('../models');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
  try {
    const value = validateRegister(req.body);

    const user = await User.findOne({
      where: {
        [Op.or]: [{ email: value.email || '' }, { mobile: value.mobile || '' }],
      },
    });
    if (user) {
      createError('email or mobile is already in use', 400);
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
// exports.login = (req, res, next) => {
//     res.json({ key: 'test system' });
//   };
