const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    name :{
        type:String,
        require :[true,"User name is Required "]
    },
    email :{
        type:String,
        require :[true,"User Email is Required "]
    },
    image :{
        type:String,
        require :[true,"User image is Required "]
    },
    password :{
        type:String,
        require:[true,"Author name is require"]
    },
    studentID:{
        type:String,
        require:[false,"ISBN Number is require "]
    }
    ,
    token:{
        type:String,
        require:[false,"genres name is require "]
    },
    role:{
        type:String,
        default:"STUDENT",
        require:[false,"Publisher name is require "],
        enum:["STUDENT","ADMIN","TEACHER"]
    }
});

module.exports = mongoose.model('user',user);