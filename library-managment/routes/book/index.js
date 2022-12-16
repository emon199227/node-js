var express = require('express');
var router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");

//const Book = require("../../model/book");


/* GET home page. */
router.get('/',  async (req, res, next)=> {
    try {
        const books = await Book.find({});
        res.render("pages/books",{books});
        console.log(books);
    } catch (e) {
        console.log(e.toString());  
        
    }

});
//create schema and model
const bookSchema = new mongoose.Schema({
  book_name :{
      type:String,
      require :[true,"User name is Required "]
  },
  image :{
      type:String,
      require :[true,"User image is Required "]
  },
  author_name :{
      type:String,
      require:[true,"Author name is require"]
  },
  isbn:{
      type:String,
      require:[true,"ISBN Number is require "]
  },
  genres:{
      type:String,
      require:[true,"genres name is require "]
  },
  publisher:{
      type:String,
      require:[true,"Publisher name is require "]
  }
});

const Book = mongoose.model("Books",bookSchema);
//file upload

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


router.get('/add-book',  function (req, res, next) {
    res.render('form/add-book');

});


router.post("/add-book",upload.single("image"),async(req,res)=>{

  try {
      const newBook = new Book({
          book_name :req.body.book_name,
          image : req.file.filename,
          author_name:req.body.author_name,
          isbn:req.body.isbn,
          genres:req.body.genres,
          publisher:req.body.publisher,
      });
      await newBook.save();
      res.status(201).send(newBook+"<br>Data Store successfully");
      
  } catch (error) {
      res.status(500).send(error);
  }  
 });
 

module.exports = router;