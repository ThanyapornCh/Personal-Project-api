const jwt = require('jsonwebtoken');
const createError = require('../utils/create-error');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    //แกะ โทเค่นออกมาจากรีเควส
    // เปลี่ยนโทเค่นเป็น เพย์โหลด
    // เช็คว่าเพย์โหลดนั้น มีโรลเป็นแอดมิน ถ้าไม่ใช่แอดมิน เตะออก ออกไหปปปปปปปป
    // ถ้าใช่แอดมินไปต่อ
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith('Bearer ')) {
      createError('you are unauthorized', 401);
    }
    const token = authorization.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findOne({
      where: { id: payload.id },
      attributes: {
        exclude: ['password'],
      },
    });
    if (user.role === 'admin') {
      next();
    }
    createError('You are unauthorrized, You not admin', 401);
    console.log('admin');
  } catch (err) {
    console.log('error rav');
    next(err);
  }
};
