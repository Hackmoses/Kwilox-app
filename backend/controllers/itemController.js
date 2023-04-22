

const getItems = (req, res) => {
    res.status(200).json({message:"Susan has no drink yet"})
}


const postItems = (req, res) => {
    res.status(200).json({message:"Drink Posted"})
}


module.exports = {
    getItems,
    postItems
}