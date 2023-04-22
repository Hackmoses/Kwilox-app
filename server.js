
const express = require("express")
const dotenv = require("dotenv").config()
const color = require("colors")
const {errorHandler} = require("./backend/middlewares/errorMiddleware")
const connectDB =require("./backend/config/db")

connectDB()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:false }))

app.use("/api/items", require("./backend/routes/itemRoutes"))

app.use("/api", require("./backend/routes/userRoutes"))

app.use(errorHandler)

app.listen(PORT, ()=> {
    console.log("Server runing at 5000")
})