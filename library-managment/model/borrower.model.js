const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const borrower = new Schema({
    userId :{
        type:Schema.Types.ObjectId,
        ref:'user',
        require :[true,"User Id is Required "]
    },
    bookId :{
        type:Schema.Types.ObjectId,
        ref:'book',
        require :[true,"Book Id is Required "]
    },
    purchaseDate :{
        type:Date,
        default:Date.now
    },
    active :{
        type:Boolean,
        default:true
    },
    
},{timestamps:true});

module.exports = mongoose.model('Borrower',borrower);