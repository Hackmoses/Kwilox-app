
const express = require("express")

const router = express.Router()
const { getItems, postItems, updateItems, deleteItems } = require("../controllers/itemController")

const {protect} = require("../middlewares/authMiddleware")

router.get("/", protect, getItems)
router.post("/", protect, postItems)
router.put("/:id", protect, updateItems)
router.delete("/:id", protect, deleteItems)

module.exports = router