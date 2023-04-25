
const asyncHandler = require("express-async-handler")
const dotenv = require("dotenv").config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require("../models/userModel")

const registerUser = asyncHandler( async (req, res) => {

    //destructuring from req.body
    const {firstName, lastName, email, age, phoneNumber, password, role } = req.body

    if (!firstName || !lastName || !email || !age || !phoneNumber || !password || !role) {
        res.status(400)
        throw new Error("Please enter all required field")
    }

    //Confirming password length
    if(password.length < 8) {
        res.status(400);
        throw new Error('Password must be at least 8 characters long');
        }
    //Checking if user already exist
    const userExists = await User.findOne({email})

    if (userExists) {
        res.status(400)
        throw new Error("User Already Exist")
    }

    //salting password using bycrypt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //creating user
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
        role:user.role,
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
    //confirming if password and email match
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(201).json({
        message: "Login Succesfull",
        _id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        token: generateToken(user._id)
        })
        
    } else{
        res.status(400)
        throw new Error("Invalid Credential")
    }
}
)


const logoutUser = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({
        success: true,
        message: "Logged out"
    })
}

const generateToken = (id) => {
    //generating token with jwt
    return jwt.sign({id }, `${process.env.JWT_SECRET}`, {
        expiresIn : "14d",
    })
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
}