
const mongoose = require("mongoose")

const itemSchema = mongoose.Schema ({
    //Creating Drink/confectionaries data model
    title: {
        type: String,
        required : [true, "Please add the title"]
    },

    price : {
        type: Number,
        required : [true, "Please add your price"]
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("Item", itemSchema)