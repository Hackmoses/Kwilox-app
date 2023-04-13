
const express = require("express")

const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Welcome to Kwilox Nigeria")
})


app.listen(PORT, ()=> {
    console.log("Server runing at 5000")
})