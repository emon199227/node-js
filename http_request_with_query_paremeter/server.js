const express = require('express');
const app = express();
const PORT = 3001;

app.get("/",(req,res)=>{
    //old version
   // const id = req.query.id;
    //const name = req.query.name;
    const {id,name}=req.query;
    res.send(`<h1>Student id is: ${id}<br>Student name is: ${name} </h1>`);

});

app.listen(PORT ,()=>{
    console.log(`Server is running at http://localhost:${PORT} `);
});
