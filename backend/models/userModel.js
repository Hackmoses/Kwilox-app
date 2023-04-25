
const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    //Creating user data model
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
        min: [8, 'Password must have at least 8 characters'],
        max: 12
    },
    role: {
        //creating role for users/admin
        type:String,
        default: "user",
        enum:["user", "admin"]
        
    }

}, {
    timestamps : true
})

module.exports = mongoose.model('User', userSchema)