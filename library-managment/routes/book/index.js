var express = require('express');
var router = express.Router();
const Book = require("../../model/book");

/* GET home page. */
router.get('/',  function (req, res, next) {
    res.send({message:"This home route of book"});

});

router.get('/add-book',  function (req, res, next) {
    res.render('form/add-book');

});

router.post('/add-book',function(req,res){
    // const book = new Book(req.body);
    // book.save(function(err,result){
    //    if(err) throw err;
    //    return res.json(result);
    // })
    // res.json({message:"Book Added Successfully "});
Book.create(req.body, function(err,result){
    if(err) throw err;
    
    return res.redirect("/book/add-book");
});

});
module.exports = router;