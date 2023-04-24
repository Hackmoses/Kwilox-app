
const express = require("express")

const router = express.Router()

const {getRegisteredUsers, searchUserByEmail} = require("../controllers/registeredUserController")


router.get("/", getRegisteredUsers)
router.post("/search", searchUserByEmail)


module.exports = router
