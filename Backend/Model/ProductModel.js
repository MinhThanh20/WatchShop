import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
      },
      description: {
        type: String,
      },
      price: { type: String },
      number: { type: Number },
      category: { type: String },
    },
    { timestamps: true }
  );
  const ProductModel = mongoose.model("product", productSchema);

export default ProductModel