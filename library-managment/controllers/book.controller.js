var express = require('express');
const multer = require("multer");
const mongoose = require("mongoose");
const Book = require("../model/book");
const {bookService, fineService,borrowerService,returnService } = require("../services");



  
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
    addBook:async(req,res,next)=>{

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
       },
       purchaseBook : async (req,res,next) =>{
        const {bookId} = req.params;
        const userId = req.userId;
        const alreadypurchased = await borrowerService.findPurchaseBookById(userId,bookId,next);
        if(alreadypurchased && alreadypurchased?.active){
           //then show error 
           res.locals.message = "User Has Already Purchase this Book";
            res.redirect("/book");
        }
        const book = await bookService.findBookById(bookId,next);
        if(!book){
            //then show error 
            res.locals.message = `Book id does not exsist  `;
            res.redirect("/book");
        }
        if(book && book?.quantity <=0){
            //then show error 
           res.locals.message = `Not Sufficiantt book : ${book.book_name} to purchase `;
           res.redirect("/book");
        }
        book.quantity -=1;
        await borrowerService.purchaseBook({userId,bookId},next);
        res.locals.message = `Successfully  purchase  Book :${book.book_name}`;
        res.redirect("/book");
       }
}