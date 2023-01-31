var express = require('express');
var router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const {bookController} = require("../../controllers");
const {upload}=require("../../controllers/upload.controller");
const {authMiddleware} = require("../../middlewares");

const Book = require("../../model/book");

/* GET home page. */
router.get('/',  bookController.displayBooks);

//load book form 
router.get('/add-book',authMiddleware.auth, bookController.addBookForm );
//add book
router.post("/add-book",authMiddleware.auth,upload.single("image"),bookController.addBook);
//purchase book
router.post("/purchase/:bookId",authMiddleware.auth,bookController.purchaseBook);
 

module.exports = router;