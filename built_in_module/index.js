//fs(file system ) module
const fs =require('fs');
fs.writeFile("demotext.txt","This sample text sms ",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(Successful);
    }
});
//append
fs.appendFile("demotext.txt","This sample text sms ",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(Successful);
    }
});