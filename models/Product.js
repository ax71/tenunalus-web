import mangoose from "mongoose";

const productSchema = new mangoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  offerPrice: {
    type: Number,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
});

const Product =
  mangoose.models.Product || mangoose.model("Product", productSchema);

export default Product;
