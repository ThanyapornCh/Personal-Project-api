const { Products } = require('../models');

exports.addProducts = async (req, res, next) => {
  try {
    console.log(req.body);
    const { productName, productPrice, productImage, productDescription } =
      req.body;

    console.log(productName, productPrice, productImage, productDescription);

    // const answer = await answer.create(value);
    // res.status(201).json({ answer });
  } catch (err) {
    next(err);
  }
};
