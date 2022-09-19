const express = require("express");
const { getAllUsers, creatUsers, getOneUsers, delatedUsers, updateUsers } = require("../controllers/user.controller");
const router =express.Router();

router.get("/",getAllUsers);
router.get("/:id",getOneUsers);
router.delete("/:id",delatedUsers);
router.patch("/:id",updateUsers);
router.post("/",creatUsers);


module.exports=router;