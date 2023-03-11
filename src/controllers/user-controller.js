const { User, Orders } = require('../models');
const cloudinary = require('../utils/cloudinary');
const createError = require('../utils/create-error');
const { url } = require('inspector');

exports.uploadSlip = async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log(userId);
    const order = await Orders.findOne({
      where: {
        userId: userId,
        orderStatus: 'cart',
      },
    });
    // console.log(order);
    // console.log('req.file', req.file);
    const url = await cloudinary.upload(req.file.path);
    console.log(url);
    const value = { slipUrl: url, orderStatus: 'paid' };
    console.log(value);
    await order.update(value);

    // const user = await User.create(value);

    res.status(200).json({ message: 'Upload to be success' });
  } catch (err) {
    next(err);
  } finally {
    // if (req.file) {
    //   fs.unlinkSync(req.file.path);
    // }
  }
};
exports.getAllBill = async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log(userId);
    const billOrder = await Orders.findOne({
      where: {
        orderStatus: 'paid',
        userId: userId,
      },
    });
    console.log(billOrder);

    res.status(200).json({ message: 'Show bill for customer', billOrder });
  } catch (err) {
    next(err);
  }
};
