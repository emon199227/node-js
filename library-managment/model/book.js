const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const book = new Schema({
    book_name:{type:String, require:true},
    cover_image:{type:String, require:true},
    author_name:{type:String, require:true},
    isbn:{type:String, require:true},
    genres:{type:String, require:true},
    publisher:{type:String, require:true}
});

module.exports = mongoose.model('book',book);