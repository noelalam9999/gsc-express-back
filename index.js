const express = require("express")
const app = express()
const router = require("express").Router()

app.use(express.static("client"))

app.listen("3030",()=>{
    console.log("server running in 3030")
})