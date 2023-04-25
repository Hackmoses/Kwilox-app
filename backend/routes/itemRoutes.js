
const express = require("express")

const router = express.Router()
//controllers
const { getItems, postItems, updateItems, deleteItems } = require("../controllers/itemController")
//middlewares
const {protect, isAdmin} = require("../middlewares/authMiddleware")

//item routes with middlewares
router.get("/", protect, getItems)
router.post("/", protect, isAdmin('createAny', 'item'), postItems)
router.put("/:id", protect, isAdmin('updateAny', 'item'), updateItems)
router.delete("/:id", protect, isAdmin('deleteAny', 'item'), deleteItems)

module.exports = router