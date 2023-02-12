const { userService, borrowerService, fineService } = require("../services");
const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const finesmodel = require("../model/fine.model");
const sess = require("express-session");
const { tokenHelper } = require("../helper");
const { findAll } = require("../helper/db.helper");
module.exports = {
    getLoginForm: (req, res) => {
        
            res.render("form/login");
       
    },
    getSignUpForm: (req, res) => {
        res.render("form/signup");
    },
    getLogoutForm: (req, res) => {
  res.clearCookie('token');
    return res.redirect('/user/login');
},
    getProfile: async (req, res, next) => {
        const userId = req.userId;
        const { bookId } = req.params;
        const selectedUser = await userService.findUserById(userId, next);

        const allPurchasedBook = await borrowerService.findAllPurchasedBooks(userId, next);
        const allFineBook = await fineService.findBookFineById(userId,  next);
        const allFineBookmain = await fineService.findAllFineBooks(userId, next);
        // if (allFineBook && !allFineBook?.active) {
        //     // book is already returned
        //     res.locals.message = "Fine is already creadted ";
        //     return res.redirect("/user/profile");
        // }

        const findAmount = allFineBook.amount;
        const findId = allFineBook.userId;
        const resultFinal = 0;

        //const allFineBook = await fineService.findAllFineBooks(userId, next);
       // console.log("amount:" + findAmount + " -- " + "Id:" + findId);
        if (findAmount != 0) {
            console.log("amount:" + findAmount  );
        }
        

     res.render("form/profile", { books: allPurchasedBook, fines: allFineBook,users:selectedUser });
        console.log("amount:" + findAmount);
    },
    login: async (req, res, next) => {
        const { email, password } = req.body;
        const user = await userService.findUserByEmail(email, next);
        if (!user) {
            res.locals.message = "User does not  exist with this email .";
            return res.redirect("/user/login");
        }
        if (!(bcrypt.compare(password, user.password))) {
            res.locals.message = "Incorrect Password  .";
            return res.redirect("/user/login")
        }
        const userId = user._id;
        const token = await tokenHelper.sign({ userId: userId }, next);
        user.token = token;
        delete user._id;
        await userService.updateUser(user, userId, next);
        res.cookie("token", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 1 });
        return res.redirect("/user/profile");
    },
    signup: async (req, res, next) => {
        const { email, password } = req.body;
        const user = await userService.findUserByEmail(email, next);
        if (user) {
            res.locals.message = "User already exist.";
            return res.redirect("/user/signup")
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        req.body.password = hashedpassword;
        try {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                image: req.file.filename,
                password: req.body.password,
                studentID: req.body.studentID,
            });
            await newUser.save();
            res.status(201).send(newUser + "<br>Data Store successfully");
            res.redirect("/user/login");

        } catch (error) {
            res.status(500).send(error);
        }
    }
}