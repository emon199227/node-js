const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const borrower = new Schema({
    userId :{
        type:Schema.Types.ObjectId,
        ref:'User',
        require :[true,"User Id is Required "]
    },
    bookId :{
        type:Schema.Types.ObjectId,
        ref:'Book',
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
    
});

module.exports = mongoose.model('Borrower',borrower);