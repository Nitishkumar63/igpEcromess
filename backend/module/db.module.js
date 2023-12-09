import mongoose from "mongoose";
const production = process.env.PROUD
mongoose.connect(production === "true" ? process.env.DB : process.env.LOCAL_DB)
export default mongoose
