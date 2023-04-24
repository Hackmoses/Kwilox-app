

const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

const getRegisteredUsers = asyncHandler( async(req, res) => {

    const users = await User.find({})
    res.status(201).json(users)
})

const searchUserByEmail = asyncHandler( async(req, res) => {
    const { email } = req.body
    let user = await User.find({ email: email }).exec()
    if(user){
        res.status(200).json( user) 
    } else{
        res.status(401)
        throw new Error("Invalid User Email")
    }
    
})

module.exports = {
    getRegisteredUsers,
    searchUserByEmail
}