const express = require('express');
const app = express();
//routes folder access 
const userRouter = require("./routes/user.route");
app.use("/api/user",userRouter);

//home route 
app.use("/",(req,res)=>{
    res.send("I am a get request at home route ");
    res.end();
});

//error message 
app.use((req,res)=>{
    res.send("<h2><font color=red>Bad Request <br>404 ! ! Not Found</font></h2> ");
    res.end(); 
})

module.exports = app;