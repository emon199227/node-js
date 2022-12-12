var express = require('express');
var router = express.Router();

/*get user listen*/
router.get('/',function(req,res,next){
    res.send("repomse with th send");
});