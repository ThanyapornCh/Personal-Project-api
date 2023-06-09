const jwt = require('jsonwebtoken');
const createError = require('../utils/create-error');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    console.log('wane');
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer ')) {
      createError('you are unauthorized', 401);
    }
    console.log('wane2');
    const token = authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findOne({
      where: { id: payload.id },
      attributes: {
        exclude: ['password'],
      },
    });
    if (!user) {
      createError('you are unauthorized', 401);
    }
    console.log('sard2');
    req.user = user;
    next();
  } catch (err) {
    console.log('error rav');
    next(err);
  }
};
