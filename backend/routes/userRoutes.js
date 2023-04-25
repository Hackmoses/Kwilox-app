
const express = require("express")

const router = express.Router()

//controller
const {registerUser, loginUser, logoutUser} = require("../controllers/userController")

//routes
router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/logout", logoutUser)

module.exports = router