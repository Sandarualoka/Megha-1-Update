require('../db/conn');
const catchAsync = require('../utils/catchAsync');
const Product = require('../model/productSchema');
const DoctorStock = require('../model/doctorstockSchema');

exports.createProduct = catchAsync(async (req, res, next) => {
    const { name, description, quantity, price , pharmacyName , pharmacyMail } = req.body;
  
    const newProduct = new Product({
      name,
      description,
      quantity,
      price,
      pharmacyName,
      pharmacyMail,
    });
  
    const savedProduct = await newProduct.save();
  
    res.status(201).json({ data: savedProduct });
  });
exports.createDoctorStock = catchAsync(async (req, res, next) => {
    const { productName, quantity, pharmacyMail, pharmacyName } = req.body;
    const timestamp = new Date();

    const newDoctorStock = new DoctorStock({
      productName,
      quantity,
      pharmacyMail,
      pharmacyName,
      timestamp,
    });
  
    const SaveDoctorStock = await newDoctorStock.save();
  
    res.status(201).json({ data: SaveDoctorStock });
  });
  

  
  exports.updateProductQuantity = catchAsync(async (req, res, next) => {
    const { productId } = req.params;
    const { quantity } = req.body;
  
    const updatedProduct = await Product.findByIdAndUpdate(productId, { quantity }, { new: true });
  
    res.status(200).json({ data: updatedProduct });
  });
  
  exports.getAllProducts = catchAsync(async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({ data: products });
  });
  exports.getDoctorStock = catchAsync(async (req, res, next) => {
    const doctorstocks = await DoctorStock.find();
    res.status(200).json({ data: doctorstocks });
  });