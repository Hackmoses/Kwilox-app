
const express = require("express")
const dotenv = require("dotenv").config()
const color = require("colors")
const {errorHandler} = require("./backend/middlewares/errorMiddleware")
const connectDB =require("./backend/config/db")

//DB connection
connectDB()
const app = express()

//PORT
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:false }))

//Item route
app.use("/api/items", require("./backend/routes/itemRoutes"))

//User route
app.use("/api", require("./backend/routes/userRoutes"))

//Registered user route
app.use("/api/users", require("./backend/routes/registeredUsersRoutes"))

//Handling error with middleware
app.use(errorHandler)

app.listen(PORT, ()=> {
    console.log("Server runing at 5000")
})