import mongoose from "mongoose";
const { Schema } = mongoose;

const ProductSchema = new Schema({
  items: [{type:Schema.ObjectId,ref: "Purchase"}],

  price:{
  type:Number,
  trim: true,
  required: [true, "Price is Required"],
  },
  
  description: {
    type: String,
    trim: true,
    required: [true, "Descreption is Required"],
  },

  discount: { type: Number, trim: true, default: 0 },
  image: [String],

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
const product = mongoose.model("Product", ProductSchema);
export default product;
