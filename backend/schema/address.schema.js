import mongoose from "mongoose";
const {Schema} = mongoose

const AddressSchema = new Schema({
    city:{
        type:String,
        trim:true,
        required:[true,'City Fileds is Required']
    },
    state:{
        type:String,
        trim:true,
        required:[true,'State Fileds is Required']
    },
    pincode:{
        type:Number,
        trim:true,
        required:[true,'Number Fileds is Required']
    },
    landmark:{
        type:String,
        trim:true,
        required:[true,'LandMark Fileds is Required']
    },
    village:{
        type:String,
        trim:true,
        required:[true,'Village Fileds is Required']
    },

})

const address = mongoose.model('Shipping',AddressSchema);
export default address