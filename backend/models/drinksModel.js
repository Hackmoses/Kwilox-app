
const mongoose = require("mongoose")

const drinkSchema = mongoose.Schema ({

    title: {
        type: String,
        required : [true, "Please add the title"]
    },

    price : {
        type: String,
        required : [true, "Please add your price"]
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("Drink", drinkSchema)