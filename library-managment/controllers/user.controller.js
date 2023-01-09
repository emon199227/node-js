const { userService, borrowerService } = require("../services");
const bcrypt = require("bcrypt");
const User = require("../model/user.model");
const { tokenHelper } = require("../helper");
module.exports = {
    getLoginForm: (req, res) => {
        res.render("form/login");
    },
    getSignUpForm: (req, res) => {
        res.render("form/signup");
    },
    getProfile: async (req, res,next) => {
        
        res.render("form/profile");
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