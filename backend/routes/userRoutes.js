
const express = require("express")

const router = express.Router()

const {registerUser, loginUser, loggedIn} = require("../controllers/userController")

router.post("/register", registerUser)

router.post("/login", loginUser)

router.get("/me", loggedIn)

module.exports = router