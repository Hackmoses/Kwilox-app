
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
        minlength: [6, 'password must have at least six(6) characters'],
        match: [
           /^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]+$/,
           "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and a special characters"
       ]
    }

}, {
    timestamps : true
})

module.exports = mongoose.model('User', userSchema)