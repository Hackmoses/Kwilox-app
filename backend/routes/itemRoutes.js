
const express = require("express")

const router = express.Router()
const { getItems, postItems, updateItems, deleteItems } = require("../controllers/itemController")


router.get("/", getItems)
router.post("/", postItems)
router.put("/:id", updateItems)
router.delete("/:id", deleteItems)

module.exports = router