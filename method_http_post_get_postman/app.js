const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("I am a get request at home route ");
});
/*
app.get("/about",(req,res)=>{
    res.send("I am a get request at About route ");
});*/
app.post("/",(req,res)=>{
    res.send("I am a post request at home route ");
});

app.put("/",(req,res)=>{
    res.send("I am a put request at home route ");
});
app.delete("/",(req,res)=>{
    res.send("I am a delete request at home route ");
});
module.exports = app;