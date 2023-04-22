

const getDrinks = (req, res) => {
    res.status(200).json({message:"Susan has no drink yet"})
}


const postDrinks = (req, res) => {
    res.status(200).json({message:"Drink Posted"})
}


module.exports = {
    getDrinks,
    postDrinks
}