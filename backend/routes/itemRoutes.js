
const express = require("express")

const router = express.Router()
const { getItems, postItems, updateItems, deleteItems } = require("../controllers/itemController")

const {protect, isAdmin} = require("../middlewares/authMiddleware")

router.get("/", protect, getItems)
router.post("/", protect, isAdmin('createAny', 'item'), postItems)
router.put("/:id", protect, isAdmin('updateAny', 'item'), updateItems)
router.delete("/:id", protect, isAdmin('deleteAny', 'item'), deleteItems)

module.exports = router