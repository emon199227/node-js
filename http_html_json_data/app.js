const express = require('express');
const app = express();
//routes folder access 
const userRouter = require("./routes/user.route");
app.use("/api/user",userRouter);

//SignUp route 
app.use("/sign",(req,res)=>{
    res.statusCode=200;
    res.sendFile(__dirname+"/views/signup.html");
    res.end();
});

//register route 
app.use("/register",(req,res)=>{
    res.status(200).json({
        "name":"Emon",
        "message":"I am a register page ",
        statusCode:200
    });
    

});
app.use("/signin",(req,res)=>{
    //redirect login
    res.redirect("/login");

});
//login route 
app.use("/login",(req,res)=>{
    res.send("I am login Page  ");
    res.end();
});

//home route 
app.use("/",(req,res)=>{
    res.statusCode=202;
    res.sendFile(__dirname+"/views/index.html");
});

//error message 
app.use((req,res)=>{
    res.send("<h2><font color=red>Bad Request <br>404 ! ! Not Found</font></h2> ");
    res.end(); 
});

module.exports = app;