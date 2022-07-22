//os path module
const os = require("os");
//user information
console.log(os.userInfo());
//home directory
console.log(os.homedir());
//host name 
console.log(os.hostname());
//total memory show
console.log(os.totalmem());
//free memory show
console.log(os.freemem());
console.log("Other way to declaration ");

const {totalmem,freemem} = require("os");
//total memory showm
console.log(os.totalmem());
//free memory show
console.log(os.freemem());