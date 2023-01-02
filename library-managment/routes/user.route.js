var express = require('express');
var router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const {bookController} = require("../controllers");
const {upload}=require("../controllers/upload.controller");

const Book = require("../model/book");

/* GET home page. */
router.get('/login',  bookController.displayBooks);
router.get('/signup', bookController.addBookForm );
router.get("/profile",upload.single("image"),bookController.addBook);
 
router.post('/login',  bookController.displayBooks);
router.post('/signup', bookController.addBookForm );
module.exports = router;