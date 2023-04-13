
const express = require("express")

const router = express.Router()
const { getDrinks } = require("../controllers/drinkController")


router.get("/", getDrinks)

module.exports = router