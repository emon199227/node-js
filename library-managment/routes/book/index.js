var express = require('express');
var router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const {bookController} = require("../../controllers");
const {upload}=require("../../controllers/upload.controller");
const {authMiddleware,authrorizationMiddleware} = require("../../middlewares");

const Book = require("../../model/book");

/* GET home page. */
router.get('/',  bookController.displayBooks);

//load book form 
router.get('/add-book',authMiddleware.auth,authrorizationMiddleware.isAdmin, bookController.addBookForm );
//add book
router.post("/add-book",authMiddleware.auth,authrorizationMiddleware.isAdmin,upload.single("image"),bookController.addBook);
//purchase book
router.post("/purchase/:bookId",authMiddleware.auth,bookController.purchaseBook);
//return book
router.get("/return/:bookId",authMiddleware.auth,bookController.returnBook);
 

module.exports = router;