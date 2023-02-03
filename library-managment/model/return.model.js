const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const returned = new Schema({
    userId :{
        type:Schema.Types.ObjectId,
        ref:'book',
        require :[true,"User Id is Required "]
    },
    bookId :{
        type:Schema.Types.ObjectId,
        ref:'user',
        require :[true,"Book Id is Required "]
    },
    returnedDate :{
        type:Date,
        default:Date.now
    }
    
},{timestamps:true});

module.exports = mongoose.model('Returned',returned);