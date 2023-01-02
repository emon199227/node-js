var express = require('express');
var router = express.Router();
const bookRoute = require("./book");
const userRoute = require("./user.route");

/* GET home page. */
router.get('/',  function (req, res, next) {
    res.render('index', { title: "express" });

});

router.use('/book', bookRoute);
router.use('/user', userRoute);

module.exports = router;