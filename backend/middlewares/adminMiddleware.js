
const asyncHandler = require("express-async-handler")

const User = require("../models/userModel")

const isAdmin = asyncHandler( async(req, res) => {
    const userRole = await req.user.role
    if(userRole == 0) {
        res.status(401)
        throw new Error ("User not authorize, you must be an ADMIN")
    }
})


module.exports = {
    isAdmin
}