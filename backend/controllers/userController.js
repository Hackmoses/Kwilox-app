
const asyncHandler = require("express-async-handler")
const dotenv = require("dotenv").config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")


const registerUser = asyncHandler( async (req, res) => {
    const {firstName, lastName, email, age, phoneNumber, password, role } = req.body

    if (!firstName || !lastName || !email || !age || !phoneNumber || !password ) {
        res.status(400)
        throw new Error("Please enter all required field")
    }

    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error("User Already Exist")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        firstName,
        lastName,
        email,
        age,
        phoneNumber,
        password:hashedPassword,
        role
    })

    if(user){
        res.status(201).json({
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        age: user.age,
        phoneNumber: user.phoneNumber,
        token: generateToken(user._id)
        })
        
    } else{
        res.status(400)
        throw new Error("Invalid User Data")
    }

}

)

const loginUser = asyncHandler( async (req, res) => {

    const {email, password} = req.body

    const user = await User.findOne({email})

    if (!user){
        res.status(400)
        throw new Error("User not found, please register!!")
    }

    if(user && (await bcrypt.compare(password, user.password))){
        res.status(201).json({
        message: "Login Succesfull",
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: generateToken(user._id)
        })
        
    } else{
        res.status(400)
        throw new Error("Invalid Credential")
    }
}
)

const loggedIn = asyncHandler(async (req, res) => {
    
    const {_id, firstName, lastName, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        firstName,
        lastName,
        email
    })
})


const logoutUser = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "Logged out"
    })
}

const generateToken = (id) => {
    return jwt.sign({id }, `${process.env.JWT_SECRET}`, {
        expiresIn : "14d",
    })
}

module.exports = {
    registerUser,
    loginUser,
    loggedIn,
    logoutUser
}