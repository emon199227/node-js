require("dotenv").config();
const express = require('express');
const cors = require("cors");
const mongoose =require("mongoose");
const User = require("./models/user.model");
const app = express();
const port =process.env.PORT || 4000;
const dbURL = process.env.MONGO_URL

mongoose.connect(dbURL).then(()=>{
    console.log('Mongo Db Atlas is Connected ');
}).catch((error)=>{
    console.log(error);
    process.exit(1);
});

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Home ROute 
app.get("/",(req,res)=>{
    res.statusCode=202;
    res.sendFile(__dirname+"/./views/index.html");
});
//User Registration 
app.post("/register",async(req,res)=>{
    //const {email,password}= req.body;
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error.message);
        
    }
});
//User Login 
app.post("/login",async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await User.findOne({email:email});
        if(user && user.password == password ){
            res.status(200).json({status:`Valid User  ${email}` });
        }else{
            res.status(404).json({status:'Not Valid User ! '})
        }

    } catch (error) {
        res.status(500).json(error.message);
        
    } 
});


//route not found
app.use((req,res,next)=>{
    res.status(404).json({message :"Route Not Found "});
});
//server Handaling error
app.use((err,req,res,next)=>{
    res.status(500).json({message :"Something Broke  "});
});


app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port} `);
});