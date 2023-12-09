import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from 'bcrypt'
const userSchema = new Schema({
  fullname: { 
    type: String, 
    trim: true, 
    required: [true, "Name is Required"] 
  },

  email: { 
    type: String, 
    trim: true, 
    unique:true,
    required: [true, "Email id Required"] 
  },

  password: {
    type: String,
    trim: true,
    required: [true, "Password is Required"]
  },

  mobile: {
    type: Number,
    unique:true,
    trim: true,
    required: [true, "Mobile Number is Required"],
  },
  
  country: {
    type: String,
    trim: true,
    required: [true, "Country is Required"]
  },

    birth: {
      type: String,
      trim: true,
      required: [true, "Birth is Required"]
    },

  cart:[{
    type:Schema.ObjectId, 
    ref:'Product'
  }],

  address:[{
    type:Schema.ObjectId, 
    ref:'Shipping'
  }],

  token:{
    type:String,
    trim:true
  },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
userSchema.index({email:1,mobile:1})//cheack email mobile dupla


userSchema.pre('save',async function(next){
  const encrypt = await bcrypt.hash(this.password.toString(),12);
  this.password = encrypt
  next()
})


const users = mongoose.model("User", userSchema);
export default users;

