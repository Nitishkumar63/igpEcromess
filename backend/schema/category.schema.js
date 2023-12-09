import mongoose from "mongoose";
const { Schema } = mongoose;

const CategorySchema = new Schema({
  product: [{ type:Schema.Types.ObjectId, ref: "Product" }],

  title: {
    type: String,
    trim: true,
    required: [true, "Product name is Required"],
  },

  logo:[String],

  createdAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
const category = mongoose.model("Category", CategorySchema);
export default category;
