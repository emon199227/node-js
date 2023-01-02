var express = require('express');
var router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const {bookController} = require("../../controllers");
const {upload}=require("../../controllers/upload.controller");

const Book = require("../../model/book");

/* GET home page. */
router.get('/',  bookController.displayBooks);

//load book form 
router.get('/add-book', bookController.addBookForm );
//add book
router.post("/add-book",upload.single("image"),bookController.addBook);
 

module.exports = router;