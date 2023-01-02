var express = require('express');
const multer = require("multer");
const mongoose = require("mongoose");
const Book = require("../model/book");


      const storage = multer.diskStorage({
      destination: function (req,file,cb){
       cb(null,"public/uploads/");
    
      },
      filename: function (req,file,cb){
    //file name created 
       const name = Date.now() + "-"+file.originalname;
       cb(null,name);
      },
    });
    
    const upload = multer({storage:storage});
    module.exports = {
        upload
    }