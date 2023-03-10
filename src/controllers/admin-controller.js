const { Orders } = require('../models');

exports.getAllOrderStatus = async (req, res, next) => {
  const orders = await Orders.findAll();
  res.satus(200).json({ orders });
};
