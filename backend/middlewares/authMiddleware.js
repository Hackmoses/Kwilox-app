const asyncHandler = require("express-async-handler")

const jwt = require("jsonwebtoken")

const User = require("../models/userModel")

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

module.exports = {
    protect
}