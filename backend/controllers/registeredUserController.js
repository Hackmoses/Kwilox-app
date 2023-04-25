

const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")


// GET request
///api/users
const getRegisteredUsers = asyncHandler( async(req, res) => {
    //finding user
    const users = await User.find({})
    res.status(201).json({data:users})
})


// POST request
///api/users/search
const searchUserByEmail = asyncHandler( async(req, res) => {
    const { email } = req.body
    //confirm wether email was inputed
    if (!email) {
        res.status(401)
        throw new Error("Please provide an email")
    }

    let user = await User.find({ email: email }).exec()
    
    //Confirm if user exist
    if(!user){
        res.status(401)
        throw new Error("Invalid User Email")
    }
    if(user){
        res.status(200).json({data:user}) 
    } 
})

module.exports = {
    getRegisteredUsers,
    searchUserByEmail
}