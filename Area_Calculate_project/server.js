const express = require('express');
const app = express();
//for data load in body use bodyparser 
const bodyParser = require('body-parser');
const PORT = 3000;

//use body parser content 
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//route to redirect html home page 
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");

});

//route to redirect html circle page 
app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html");

});

//route to method post data circle receive 
app.post("/circle",(req,res)=>{
    const radius = req.body.radius;
    const circle = Math.PI*radius*radius;
    res.send(`<h2>Area of Circle is :${circle}</h2><br> <a href='/'>home page</a> `);
    


});

//route to redirect html tringle page 
app.get("/tringle",(req,res)=>{
    res.sendFile(__dirname+"/tringle.html");

});

//route to method post data tringle  receive 
app.post("/tringle",(req,res)=>{
    const base =req.body.base;
    const height = req.body.height;
    const area = 0.5*base*height;
    res.send(`<h2>Area of tringle is :${area}</h2><br> <a href='/'>home page</a>`);
});
app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});