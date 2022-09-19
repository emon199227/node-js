const express = require("express");
const app = express();
const cors = require("cors");
require("./config/db");

const userRouter = require ("./routes/user.route");


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/users",userRouter);
//home route get method
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/./views/index.html");
});
//wrong route 
app.use((req,res,next)=>{
    res.status(404).json({message : "Route not Found "});
});
//server problem
app.use((err,req,res,next)=>{
    res.status(500).json({message : "Server Problem  "});
});


module.exports = app;