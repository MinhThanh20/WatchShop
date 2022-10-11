import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        username : {
            type: String, 
            require: true
        },
        email:{
            type: String, 
            require: true
        },
        password:{
            type: String, 
            require: true
        },
        admin: {
            type: Boolean,
            default: false,
        },
    },
    {timestamps: true}
)
const UserModel = mongoose.model("user", userSchema)
export default UserModel