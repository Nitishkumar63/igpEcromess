import User from "../schema/user.schema.js";
import bcrypt from "bcrypt";
import sendEmail from "../module/mail.module.js";


await sendEmail()
export const login = async (req,res) =>{
    try {
        console.log(req.body)
        return false
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User doesn`t exist" });
    
        // user exist
        const hash = user.password;
        const isAuth = await bcrypt.compare(password, hash);
        if (!isAuth) return res.status(401).json({ message: "Incorrect password" });
    
  
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({err:error.message})
    }



}

export const signup = async (req,res)=>{
try {
    const data = req.body
    const user = new User(data)
    const x = await user.save()
    res.status(200).json(x)
} catch (error) {
    res.status(500).json(error.message)
} 
 
}




export const forgotPassword =(req,res)=>{
    res.send('forgotPassword,')
}