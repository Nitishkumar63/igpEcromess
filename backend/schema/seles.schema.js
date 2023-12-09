import mongoose from "mongoose";
const { Schema } = mongoose;

const selesSchema = new Schema({
  product: [{type: Schema.ObjectId,ref: "Product"}],
  
  customer:{
    type: Schema.ObjectId,
    ref: "User",
  },

  createdAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
});
const seles = mongoose.model("Selse", selesSchema);
export default seles;
