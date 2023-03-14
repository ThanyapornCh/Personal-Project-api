const { Products, Categories, Brands } = require('../models');
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');
exports.addProducts = async (req, res, next) => {
  try {
    // console.log(req.body);
    // const { productName, productPrice, productImage, productDescription } =
    //   req.body;

    // console.log(productName, productPrice, productDescription, req.file.path);

    console.log(req.file.path);
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
    console.log(value);
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
  console.log('Bridge Bar');
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

exports.updateProducts = async (req, res, next) => {
  try {
    const updateurl = await cloudinary.upload(req.file.path);
    console.log(updateurl);
    //หยิบ โปรดัคที่จะอัพเดทมาจากบอดี้ แล้ว ก็แอซซายเข้าตัวแปร
    // เอาไปเซฟลงดาต้าเบส
    // ส่งเรสป้อนคืน ว่าอัพเดทสำเร็จ
    const obj = Object.assign({}, req.body);
    console.log(obj);
    const {
      id,
      productName,
      productImage,
      productQuantity,
      productPrice,
      productDescription,
    } = Object.assign({}, req.body);

    const updateproduct = await Products.update(
      {
        productName,
        productImage,
        productQuantity,
        productPrice,
        productDescription,
      },
      { where: { id } }
    );
    console.log(updateproduct);
    res.status(200).json({ message: 'Update product to be success' });
  } catch (err) {
    next(err);
  }
};

exports.deleteProducts = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const totalDeleteProduct = await Products.destroy({
      where: {
        id: Number(productId),
      },
    });
    console.log(totalDeleteProduct);
    res.status(204).json({ message: 'Delete Product to be success' });
  } catch (err) {
    next(err);
  }
};
