import  Jwt  from "jsonwebtoken";

export const verifyToken = async(req, res,next)=> {
        const token = req.headers.token
        if (token){
            const accessToken = token.split(" ")[1];
            Jwt.verify(accessToken, process.env.JWT_KEY, (err,user)=> {
                if (err){
                    res.status(403).json("Token is not valid")
                }
                req.user = user;
                next();

            });
        }
        else{
            res.status(401).json("You are not authenticated")

        }
    }
export const verifyTokenAndAdminAuth = async(req,res,next)=>{
    verifyToken(req,res, ()=> {
        if(req.user.id == req.params.id || req.user.admin){
            next()
        }
        else {
            res.status(403).json("You are not allowed to delete other")
        }
    })
}
