const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//registration 
app.get("/register",(req,res)=>{
    res.sendFile()
})


app.post("/register",(req,res)=>{
    
    res.send("Welcome ");
    

})

app.listen(PORT ,()=>{
    console.log(`Server is running at http://localhost:${PORT} `);
});
