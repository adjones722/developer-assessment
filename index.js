const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
//const server = require('./api/server')
const port = process.env.PORT

app.get("/", (req,res) => {
    res.send("Hello World")
})

app.get("/cart", (req,res) => {
    res.send("Cart")
})


app.listen(port, () => {
    console.log("server running successfully")
})
