import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../Controllers/UserController.js";
import express from "express";
const router = express.Router();
// Get user
router.get("/:id", getUser);
// Get all User
router.get("/", getAllUser);
// Delete User
router.delete("/:id", deleteUser);

router.put("/:id", updateUser);
export default router;
