
const express = require("express")

const router = express.Router()

const {registerUser, loginUser, logoutUser, loggedIn} = require("../controllers/userController")

const {protect} = require("../middlewares/authMiddleware")

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/logout", logoutUser)
router.get("/me", protect, loggedIn)

module.exports = router