
const express = require("express")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./backend/middlewares/errorMiddleware")

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:false }))

app.use("/api/drinks", require("./backend/routes/itemRoutes"))

app.use(errorHandler)

app.listen(PORT, ()=> {
    console.log("Server runing at 5000")
})