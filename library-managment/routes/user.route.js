var express = require('express');
var router = express.Router();
const multer = require("multer");
const mongoose = require("mongoose");
const {userController} = require("../controllers");
const {authMiddleware} = require("../middlewares");
const {upload}=require("../controllers/upload.controller");

const Book = require("../model/book");

/* GET home page. */
router.get('/login',  userController.getLoginForm);
router.get('/signup', userController.getSignUpForm );
router.get("/profile",authMiddleware.auth,userController.getProfile);
router.get("/logout", userController.getLogoutForm);
 
router.post('/login',  userController.login);
router.post("/signup",upload.single("image"), userController.signup );
module.exports = router;