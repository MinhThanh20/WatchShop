import ProductModel from "../Model/ProductModel.js";
import OrderModel from "../Model/OrderModel.js";
import mongoose from "mongoose";
// Add Product
export const addProduct = async (req, res) => {
  const newProduct = new ProductModel(req.body);
  try {
    await newProduct.save();
    res.status(200).json(req.body); // nhận thành công va nhận lại những gì client gửi cho mình
  } catch (error) {
    console.log(error);
  }
};
//Get all product
export const getAllProduct = async (req, res) => {
  {
    try {
      const product = await ProductModel.find().sort({ createdAt: -1 });
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  }
};
export const getProductbyId = async (req, res) => {
  {
    try {
      const productbyid = await ProductModel.findOne({
        _id: req.params.id,
      });
      res.status(200).json(productbyid);
    } catch (err) {
      console.log(err);
    }
  }
};

// Get products b category
export const getProductbyCategory = async (req, res) => {
  {
    try {
      const getProductbyCategory = await ProductModel.find({
        category: req.params.id,
      });
      res.status(200).json(getProductbyCategory);
    } catch (err) {
      console.log(err);
    }
  }
};

//Update Product
export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = ProductModel.findById(productId);
    await product.updateOne(req.body);
    res.status(200).json("Product Updated");
  } catch (error) {
    console.log(error);
  }
};
// Delete Product
export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = ProductModel.findById(productId);
    await product.deleteOne();
    res.status(200).json("Product Deleted");
  } catch (error) {
    console.log(error);
  }
};

// Order Product
export const orderProduct = async (req, res) => {
  const productId = req.params.id;
  const { userId, count, totalAmount, methods, info } = req.body;
  const data = { userId, productId, count, totalAmount, methods, info };
  try {
    const product = await ProductModel.findById(productId);
    const newNumber = product.number - count;
    console.log(product.number);
    if (newNumber > 0) {
      const newOrder = new OrderModel(data);
      await newOrder.save();
      await product.updateOne({ number: newNumber });
      res.status(200).json("Ordered");
    } else res.status(402).json("Out of stock");
  } catch (error) {
    console.log(error);
  }
};
