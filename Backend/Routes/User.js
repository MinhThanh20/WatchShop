import { deleteUser, getAllUser } from "../Controllers/UserController.js"
import express from "express"
import  { verifyToken, verifyTokenAndAdminAuth } from "../Controllers/MiddlewareControllers.js"
const router = express.Router()
// Get all User
router.get('/', verifyToken, getAllUser)
// Delete User
router.delete("/:id", verifyTokenAndAdminAuth,deleteUser)
export default router