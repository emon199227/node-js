const express = require ('express');
const app = express();
const PORT = 3001;

const myMiddleWare = (req,res,next)=>{
    console.log("Middle Ware Function");
    req.currentTime = new Date(Date.now());
    next();
};
app.use(myMiddleWare);
//error handle 
app.use((req,res,next)=>{
    res.send("404 Bad Getway ");
});

//other error
app.use((err,req,res,next)=>{
    res.status(500).send(`Something Broken `);
});

app.get("/",(req,res)=>{
    console.log("I am home middle"+req.currentTime);
    res.send(`<h1>Hello ! I am at home route </h1><br>${req.currentTime}`);
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});