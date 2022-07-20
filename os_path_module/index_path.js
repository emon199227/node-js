console.log(__dirname);
const { Console } = require("console");
const path = require("path");

const extentionName = path.extname("index.html");
console.log(extentionName);

const joinName = path.join(__dirname+"/viwes");
Console.log(joinName);
