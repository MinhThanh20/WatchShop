import express from "express";
import {
  acceptOrder,
  deleteOrder,
  getAllOrder,
  getOrder,
  orderProduct,
} from "../Controllers/OrderController.js";
const router = express.Router();

router.get("/admin", getAllOrder);
router.get("/:id", getOrder);
router.put("/:id/:userId", acceptOrder);
router.post("/:id", orderProduct);
router.delete("/:id", deleteOrder);
export default router;
