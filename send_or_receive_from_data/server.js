const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//registration 
app.get("/regi",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
});


app.post("/regi",(req,res)=>{

    const fullName = req.body.fullName;
    const age = req.body.age;
    
    res.send(`<h2>Your Name is :${fullName}<br> age is :${age}</h2>`);
    

});

app.listen(PORT ,()=>{
    console.log(`Server is running at http://localhost:${PORT} `);
});
