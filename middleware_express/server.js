const express = require ('express');
const app = express();
const PORT = 3000;

const myMiddleWare = (req,res,next)=>{
    console.log("Middle Ware Function");
    req.currentTime = new Date(Date.now());
    next();
};

app.get("/",myMiddleWare,(req,res)=>{
    console.log("I am home middle"+req.currentTime);
    res.send(`<h1>Hello ! I am at home route </h1><br>${req.currentTime}`);
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});