
const express = require("express")

const router = express.Router()
const { getDrinks, postDrinks } = require("../controllers/drinkController")


router.get("/", getDrinks)
router.post("/", postDrinks)

module.exports = router