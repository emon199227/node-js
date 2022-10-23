const express = require("express");

const mongoose = require("mongoose");

const multer = require("multer");

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const PORT = 8005;

//connected to db
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/userTestFile");
        console.log("Database Connected");
    } catch (error) {
        console.log("Database Not Connected");
        console.log(error);
        process.exit(1);
        
    }
};
//create schema and model
const userSchema = new mongoose.Schema({
    name :{
        type:String,
        require :[true,"User name is Required "]
    },
    image :{
        type:String,
        require :[true,"User image is Required "]
    }
});

const User = mongoose.model("Users",userSchema);


//file upload

const storage = multer.diskStorage({
   destination: function (req,file,cb){
    cb(null,"uploads/");

   },
   filename: function (req,file,cb){
//file name created 
    const name = Date.now() + "-"+file.originalname;
    cb(null,name);
   },
});

const upload = multer({storage:storage});

app.get("/register",(req,res)=>{
    res.status(200).sendFile(__dirname+"/index.html");  
   });
app.post("/register",upload.single("image"),async(req,res)=>{

    try {
        const newUser = new User({
            name :req.body.name,
            image : req.file.filename,
        });
        await newUser.save();
        res.status(201).send(newUser+"<br>Data Store successfully");
        
    } catch (error) {
        res.status(500).send(error);
    }  
   });
   

app.get("/test",(req,res)=>{
 res.status(200).send("File Upload system");  
});

app.listen(PORT,async ()=>{
    console.log(`Server is Running at http://localhost:${PORT}`);
    await connectDB();
});


/*05:23 secound   */