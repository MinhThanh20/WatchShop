import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getProductbyCategory,
  getProductbyId,
  orderProduct,
  updateProduct,
} from "../Controllers/ProductControllers.js";

import express from "express";
const router = express.Router();
//ADD Product
router.post("/", addProduct);
//Update product
router.put("/:id", updateProduct);
//Delete product
router.delete("/:id", deleteProduct);
// All product
router.get("/", getAllProduct);
// get Product by id
router.get("/:id", getProductbyId);
router.get("/category/:id", getProductbyCategory);
// order
router.post("/:id/order", orderProduct);
export default router;
