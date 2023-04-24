
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required :[true, "Please enter your firstName"]
    },
    lastName : {
        type : String,
        required :[true, "Please enter your lastName"]
    },
    email : {
        type : String,
        required :[true, "Please enter a valid email"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please add a valid E-mail"
        ]
    },
    age :{
        type : Number,
        required :[true, "Please enter your age"],
    },
    phoneNumber:{
        type : Number,
        required :[true, "Please enter a valid phone number"],
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
        type: Number,
        default: 0
    }

}, {
    timestamps : true
})

module.exports = mongoose.model('User', userSchema)