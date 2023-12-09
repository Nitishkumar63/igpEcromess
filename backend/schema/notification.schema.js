import mongoose from "mongoose";
const { Schema } = mongoose;

const notifactionSchema = new Schema({
  user: [{type: Schema.ObjectId,ref: "User"}],
  admin: [{type: Schema.ObjectId,ref: "Admin"}],
  role: {
    type:String,
    default:'user'
  },
  title: {
    type: String,
    trim: true,
    required: [true, "Title  is Required"],
  },
  description: {
    type: String,
    trim: true,
    required: [true, "Description  is Required"],
  },
  status: {
    type: String,
    default: "pending",
  },
});
const notifactions = mongoose.model("notifaction", notifactionSchema);
export default notifactions;
