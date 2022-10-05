
const axios = require('axios');

//Home route or all user 
exports.homeRoute = (req,res)=>{
    //make get request to api/users
    axios.get('http://localhost:8080/api/users')
    .then(function(response){
        // console.log(response.data)
        res.render('index',{users:response.data});
    })
    .catch(err=>{
        res.send(err);
    });
    

};
//Add User route 
exports.add_user = (req,res)=>{
    res.render("add_user");

};
//update user route 
exports.update_user = (req,res)=>{
    axios.get('http://localhost:8080/api/users',{params:{id:req.query.id}})
    .then(function(userdata){
        res.render("update_user",{user:userdata.data})
    })
   .catch(err=>{
    res.send(err);
   })

};