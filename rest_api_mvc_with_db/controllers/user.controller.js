const {v4:uuidv4} = require("uuid");
const { aggregate } = require("../models/user.model");
const User = require("../models/user.model"); 


const getAllUsers = async (req,res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
        
    }
};

const getOneUsers = async (req,res)=>{
    try {
        const user = await User.findOne({id:req.params.id});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
        
    }
};

const creatUsers = async (req,res)=>{
   try {
    const newuser = new User ({
        id:uuidv4(),
        name: req.body.name,
        age : Number(req.body.age)

    })
    await newuser.save();
    res.status(201).json(newuser);
    
   } catch (error) {
    res.status(500).send(error.message);
    
   }
};

const updateUsers = async (req,res)=>{
    try {
        const user = await User.findOne({id:req.params.id})
     user.name = req.body.name;
     user.age = Number(req.body.age);
     await user.save();
     res.status(200).json(user);
     
    } catch (error) {
     res.status(500).send(error.message);
     
    }
 };


const delatedUsers = async (req,res)=>{
    try {
        const user = await User.deleteOne({id:req.params.id})
        res.status(200).json({message:"User is Deleted "});
    } catch (error) {
        res.status(500).send(error.message);
        
    }
};

module.exports = {getAllUsers,getOneUsers,creatUsers,updateUsers,delatedUsers};