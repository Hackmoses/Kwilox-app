
const express = require("express")

const router = express.Router()

const {getRegisteredUsers, searchUserByEmail} = require("../controllers/registeredUserController")

const {protect, isAdmin } = require("../middlewares/authMiddleware")

router.get("/", protect, isAdmin('readAny', 'item'), getRegisteredUsers)
router.post("/search", protect, isAdmin('createAny', 'item'), searchUserByEmail)


module.exports = router
