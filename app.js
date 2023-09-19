// core
const express = require("express")
const dotenv = require("dotenv").config
// secondary
const {adminRoute} = require("./routes")
const expressEjsLayout = require("express-ejs-layouts")
// core
const PORT = process.env.SERVER_PORT || 4000 
const app = express()

// server static files
app.use(express.static(__dirname+"/public"))

// setting view engine
app.set("view","ejs")
app.use(expressEjsLayout)

// MIDDLEWARES
// admin route
app.use("/admin",adminRoute)

// user Route
app.use("*",(req,res)=>{
    res.send("working...")
})

app.listen(PORT,()=>{
    console.log(`server started on http:localhost:${PORT}`)
})