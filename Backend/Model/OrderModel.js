import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
  {
    userId: { type: String },
    productId: { type: String },
    count: { type: Number },
    totalAmount: { type: Number },
    methods: { type: String },
    info: {},
    status: { type: String, default: "waiting" },
  },
  { timestamps: true }
);
const OrderModel = mongoose.model("order", orderSchema);
export default OrderModel;
