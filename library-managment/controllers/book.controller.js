var express = require('express');
const multer = require("multer");
const mongoose = require("mongoose");
const Book = require("../model/book");



  
module.exports = {
    //display book list
    displayBooks: async (req, res, next) => {
        try {
            const books = await Book.find({});
            res.render("pages/books", { books });
            console.log(books);
        } catch (e) {
            console.log(e.toString());

        }
    },//display book form
    addBookForm:function (req, res, next) {
        res.render('form/add-book');
    
    },//add book 
    addBook:async(req,res)=>{

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
            res.redirect("/book");
            
        } catch (error) {
            res.status(500).send(error);
        }  
       }
}