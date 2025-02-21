require("dotenv").config()
const express =require("express")
const fs = require("fs")
const app = express()
const cors = require("cors")
const MongoDB  = require("./db.js")
const port = process.env.PORT
app.use(cors())
const userRoutes = require("./userRoutes.js")


MongoDB()
app.get
app.use(express.json());
app.use("/user", userRoutes); 


app.listen(port,()=>{
    console.log("server started at "+"http://localhost:"+port);
    
})