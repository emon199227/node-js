var Userdb = require('../model/model');

//create and save user 
exports.create = (req, res) => {
    //validet request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty !" });
        return;
    }
    //new user 
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })
    //save user in the database
    user
        .save(user)
        .then(data => {
            // res.send(data)
            res.redirect('/add-user')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occerd while creating a create operation"
            });
        });
}

//retrieve and return All Users ///retrieve and return single  Users
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id;
        Userdb.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"Not Found User With Id "+id})
            }else{
                res.send(data)
            }
        })
        .catch(err =>{
            res.status(500).send({message:"Error retrieving User with Id "+id})
        })

    } else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "some error occerd while retrieve User information"
                });
            });
    }

}


//find all user 
// exports.find = (req,res)=>{
//     Userdb.find()
//     .then(user=>{
//         res.send(user)
//     })
//     .catch(err=>{
//         res.status(500).send({
//             message:err.message || "some error occerd while retrieve User information"
//         });
//     });
// }

//update a new identifier user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res
            .status(400).send({ message: "Data to Update can  not be empty !" });

    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Can not Update User With ${id}. Maybe user Not Found  ` })
            } else {
                res.send(data)
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error Update User information"
            });

        })

}

//delete a user with spcified user id in the request 

exports.delete = (req, res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Can not Delete User With id: ${id}. Maybe Id Wrong  ` })
            } else {
                res.send({
                    message: `${id} User was Delete Successfully`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could Not Delete User with id = " + id
            });
        });
}