const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const book = new Schema({
    book_name :{
        type:String,
        require :[true,"User name is Required "]
    },
    image :{
        type:String,
        require :[true,"User image is Required "]
    },
    author_name :{
        type:String,
        require:[true,"Author name is require"]
    },
    isbn:{
        type:String,
        require:[true,"ISBN Number is require "]
    },
    genres:{
        type:String,
        require:[true,"genres name is require "]
    },
    publisher:{
        type:String,
        require:[true,"Publisher name is require "]
    },
    quantity:{
        type:Number,
        require:[true,"Quantity is require "],
        default:100
    },
    price:{
        type:Number,
        require:[true,"Price is require "],
        default:200
    }
},{timestamps:true});

module.exports = mongoose.model('book',book);