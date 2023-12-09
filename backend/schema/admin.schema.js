import mongoose from "mongoose";
const {Schema} = mongoose
import bcrypt from 'bcrypt'
const adminSchema = new Schema({
  fullname: { 
        type: String, 
        trim: true, 
        required: [true, "Name is Required"] },

      email: { 
        type: String, 
        trim:true, 
        unique:true,
        required: [true, "Email id Required"] },

      password: {
        type: String,
        trim: true,
        required: [true, "Password is Required"],
      },

      mobile: {
        type: Number,
        trim: true,
        unique:true,
        required: [true, "Mobile Number is Required"],
      },
      token:{
        type:String,
        trim:true
      },
      createdAt: { type: Date, default: Date.now() },
      updatedAt: { type: Date, default: Date.now() },
})

adminSchema.index({email:1,mobile:1})

adminSchema.pre('save',async function(next){
  const encrypt = await bcrypt.hash(this.password.toString(),12)
  this.password = encrypt
  next()
})


const admin = mongoose.model("Admin",adminSchema)
export default admin