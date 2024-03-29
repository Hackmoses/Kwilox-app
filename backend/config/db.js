
const mongoose = require("mongoose")

//making connection to database
const connectDB = async () => {

    try {
        
        connectionLink = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected ${connectionLink.connection.host}`.red.underline)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB