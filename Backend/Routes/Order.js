import express from "express";
import {
  acceptOrder,
  confirmOrder,
  deleteOrder,
  getAllOrder,
  getOrder,
  orderProduct,
} from "../Controllers/OrderController.js";
const router = express.Router();

router.get("/admin", getAllOrder);
router.get("/:id", getOrder);
router.put("/:id/:userId/accept", acceptOrder);
router.put("/:id/:userId/confirm", confirmOrder);
router.post("/:id", orderProduct);
router.delete("/:id", deleteOrder);
export default router;
