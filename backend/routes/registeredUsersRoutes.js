
const express = require("express")

const router = express.Router()

//controllers
const {getRegisteredUsers, searchUserByEmail} = require("../controllers/registeredUserController")

//middlewares
const {protect, isAdmin } = require("../middlewares/authMiddleware")

//routes and middlewares
router.get("/", protect, isAdmin('readAny', 'item'), getRegisteredUsers)
router.post("/search", protect, isAdmin('createAny', 'item'), searchUserByEmail)


module.exports = router
