
const express = require("express")

const router = express.Router()
const { getItems, postItems } = require("../controllers/itemController")


router.get("/", getItems)
router.post("/", postItems)

module.exports = router