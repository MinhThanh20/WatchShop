import ProductModel from "../Model/ProductModel.js";
import OrderModel from "../Model/OrderModel.js";
import UserModel from "../Model/UserModel.js";

export const orderProduct = async (req, res) => {
  const productId = req.params.id;
  const { userId, count, totalAmount, methods, info } = req.body;
  const data = { userId, productId, count, totalAmount, methods, info };
  try {
    const product = await ProductModel.findById(productId);
    const newNumber = product.number - count;
    if (newNumber > 0) {
      const newOrder = new OrderModel(data);
      await newOrder.save();
      await product.updateOne({ number: newNumber });
      res.status(200).json("Ordered");
    } else res.status(402).json("Out of stock");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOrder = async (req, res) => {
  const userId = req.params.id;
  try {
    const data = await OrderModel.find({ userId: userId });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllOrder = async (req, res) => {
  try {
    const data = await OrderModel.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteOrder = async (req, res) => {
  const id = req.params.id;
  try {
    await OrderModel.deleteOne({ _id: id });
    res.status(200).json("Deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const acceptOrder = async (req, res) => {
  const userId = req.params.userId;
  const id = req.params.id;
  try {
    const user = await UserModel.findById(userId);
    if (user.admin) {
      const product = await OrderModel.findById(id);
      await product.updateOne({ status: true });
      res.status(200).json("Accepted");
    } else res.status(403).json("You are not admin");
  } catch (error) {
    res.status(500).json(error);
  }
};
