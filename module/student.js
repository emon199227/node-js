//create Ea6 arrow function 
exports.const getName = () => {
    return "Al Emran Eman";
}

const getAge = () =>{
    return "30";
}
const getphn = () =>{
    return "01712447253";
}
const getcountry = () =>{
    return "Bangladesh";
}
const area = "Mathbaria";
const cgpa = 3.13;
//function acess to index.js page so export all function
/*
exports.getName = getName;
exports.getAge = getAge;
exports.result = cgpa;
*/
//function acess to index.js page so export all function another way 
module.exports = {
    getphn,
    getcountry,
    area
}
