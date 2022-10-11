import UserModel from "../Model/UserModel.js"
export const getAllUser = async (req,res)=>{
    try{
        const user = await UserModel.find()
        res.status(200).json(user)

    }
    catch(err){
        res.status(500).json(err)
    }
}
export const deleteUser = async(req,res)=>{
    try {
        const user = await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).json("Delete successful ")
    }
    catch(err) {
        res.status(500).json(err)

    }
}