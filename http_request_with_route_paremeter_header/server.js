const express = require('express');
const app = express();
const PORT = 3001;

app.get("/userId/:id/userAge/:age",(req,res)=>{
    const id = req.params.id;
    const age = req.params.age;

    res.send(`<h1>Student is is : ${id} </br> Student Age is : ${age}</h1>`);


});

app.listen(PORT ,()=>{
    console.log(`Server is running at http://localhost:${PORT} `);
});
