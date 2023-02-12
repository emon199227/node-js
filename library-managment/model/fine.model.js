const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fine = new Schema({
    userId :{
        type:Schema.Types.ObjectId,
        ref:'User',
        require :[true,"User Id is Required "]
    },
    bookId :{
        type:Schema.Types.ObjectId,
        ref:'user',
        require :[true,"Book Id is Required "]
    },
    amount :{
        type:Number,
        default:0
    },
    paidAt :{
        type:Date,
        default:Date.now
    }
    
},{timestamps:true});

module.exports = mongoose.model('Fine',fine);