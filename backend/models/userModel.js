
const mongoose = require("mongoose")

//const validator = require('validator');
const { isEmail }= require('validator/lib/isEmail')

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required :[true, "Please enter your firstName"]
    },
    lastName : {
        type : String,
        required :[true, "Please enter your lastName"]
    },
    email: {
        type: String,
        trim: true,
        match: /.+\@.+\..+/,
        unique: true,
       
    },
    age :{
        type : Number,
        required :[true, "Please enter your age"],
    },
    phoneNumber:{
        type : Number,
        required :[true, "Please enter a valid phone number"],
        min:[8, "Password must be greater than 8"]
    },
    password: {
        type : String,
        required :[true, "Please create a password"],
        /*match: [
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$", 
            "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
        ], */
        min: [6, 'Password must have at least 6 characters'],
        max: 12
    },
    role: {
        type:String,
        default: "user",
        enum:["user", "admin"]
        
    }

}, {
    timestamps : true
})

module.exports = mongoose.model('User', userSchema)