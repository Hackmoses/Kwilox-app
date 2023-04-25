
const asyncHandler = require("express-async-handler")
const Items = require("../models/itemsModel")


// GET request
///api/items
const getItems = asyncHandler(async(req, res) => {
    const items = await Items.find({})
    res.status(200).json({
        message:"List of Items",
       items
    })
}) 

// POST request
///api/items
const postItems = asyncHandler(async (req, res) => {

    //confirm if title and price was inputed
    const {title, price} = req.body
    if (!title || !price) {
        res.status(400)
        throw new Error("Please Enter a Text Field")
    }

    //creating item
    const item = await Items.create({
        title : title,
        price: price
    })
    res.status(200).json(item)
})

// PUT request
///api/items/:id
const updateItems = asyncHandler(async (req, res) => {

    const item = await Items.findById(req.params.id)
    //confirm if item exist
    if(!item){
        res.status(400)
        throw new Error ("Item not found")
    }

    const updatedItem = await Items.findByIdAndUpdate(req.params.id, 
        req.body, {
            new: true,
        })

    res.status(200).json({message: "Item Updated successfully ", updatedItem})
})

// DELETE request
///api/items:id

const deleteItems = asyncHandler(async (req, res) => {

    const item = await Items.findById(req.params.id)

    if(!item){
        res.status(400)
        throw new Error ("Item not found")
    }

    const deletedItem = await Items.findByIdAndDelete(req.params.id)

    res.status(200).json({message: "Item deleted successfully ", deletedItem})
})


module.exports = {
    getItems,
    postItems,
    updateItems,
    deleteItems
}

