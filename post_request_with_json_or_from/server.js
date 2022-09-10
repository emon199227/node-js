const express = require('express');
const app = express();
const PORT = 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.post("/user",(req,res)=>{
    const name = req.body.name;
    const age = req.body.age;
    res.send(`Welcome ${name}.Your age is : ${age}`);
    

})

app.listen(PORT ,()=>{
    console.log(`Server is running at http://localhost:${PORT} `);
});
