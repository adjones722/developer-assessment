const express = require('express')
const app = express()
const router = express.Router

router.get("/", (req,res) => {
    res.send("Hello World")
})

router.get("/cart", (req,res) => {
    res.send("Cart")
})
