const asyncHandler = require("express-async-handler")

const jwt = require("jsonwebtoken")

const User = require("../models/userModel")

const {roles} = require("../controllers/roles")

const protect = asyncHandler( async (req, res, next) => {

    let token
    //Get token from header
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(" ")[1]

            //verify token
            const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`)
            
            //Get user from the token
            req.user = await User.findById(decoded.id).select("-password")

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error("UnAuthorised User")

        } 
    }

    if(!token){
        res.status(401)
            throw new Error("UnAuthorised User, No token")
    }

}
)

const isAdmin = function(action, resource) {
    return async (req, res, next) => {
     try {
      const permission = roles.can(req.user.role)[action](resource);
      if (!permission.granted) {
       return res.status(401).json({
        error: "You  permission to perform this action kindly contact ADMIN"
       });
      }
      next()
     } catch (error) {
      next(error)
     }
    }
   }



module.exports = {
    protect,
    isAdmin
}