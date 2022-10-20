const express = require("express");

const multer = require("multer");

const app = express();

const PORT = 8005;

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
app.post("/register",upload.single("image"),(req,res)=>{
    res.status(200).send("File Uploaded Successfully");  
   });
   

app.get("/test",(req,res)=>{
 res.status(200).send("File Upload system");  
});

app.listen(PORT,()=>{
    console.log(`Server is Running at http://localhost:${PORT}`);
});


/*05:23 secound   */