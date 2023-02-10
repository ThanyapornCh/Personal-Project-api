const { Products, Categories, Brands } = require('../models');
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');
exports.addProducts = async (req, res, next) => {
  try {
    //   console.log(req.body);
    //   const { productName, productPrice, productImage, productDescription } =
    //     req.body;

    //   console.log(productName, productPrice, productDescription, req.file.path);
    const url = await cloudinary.upload(req.file.path);
    console.log(url);
    const value = {
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      productImage: url,
      productDescription: req.body.productDescription,
      brandId: req.body.brandId,
      categoriesId: req.body.categoriesId,
    };
    const products = await Products.create(value);
    // const answer = await answer.create(value);
    res.status(201).json({ products });
  } catch (err) {
    next(err);
  } finally {
    if (req.file) {
      fs.unlinkSync(req.file.path);
    }
  }
};

exports.getAllProducts = async (req, res, next) => {
  const products = await Products.findAll();
  res.status(200).json({ products });
};

exports.getAllCategories = async (req, res, next) => {
  const categories = await Categories.findAll();
  res.status(200).json({ categories });
};
exports.getAllBrand = async (req, res, next) => {
  const brand = await Brands.findAll();
  console.log(brand);
  res.status(200).json({ brand });
};
