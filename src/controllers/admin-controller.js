const { Orders } = require('../models');

exports.getAllOrderStatus = async (req, res, next) => {
  try {
    const userId = req.user.id;
    console.log(userId);

    // const checkOrder = await Orders.findOne({
    //   where: {
    //     orderStatus: 'cart',
    //     userId: userId,
    //   },
    // });
    // console.log(checkOrder);
    // if (user.role === 'admin') {
    //   const checkOrder = await Orders.findOne({
    //     where: {
    //       orderStatus: 'cart',
    //       userId: userId,
    //     },
    //   });
    //   console.log(checkOrder);
    // }
    res.status(200).json({ message: 'Show order staus to be success' });
  } catch (err) {
    next(err);
  }
};
