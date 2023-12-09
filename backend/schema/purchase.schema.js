import mongoose from "mongoose";
const { Schema } = mongoose;

const purchesSchema = new Schema({

  title: {
    type: String,
    trim: true,
    required: [true, "Product Name is Required"],
  },
  
  price: {
    type: Number,
    trim: true,
    required: [true, "Price is Required"],
  },
  qut: {
    type: Number,
    trim: true,
    required: [true, "Qut filed required"],
  },
  createdAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
});
const purchase = mongoose.model("Purchase", purchesSchema);
export default purchase;
