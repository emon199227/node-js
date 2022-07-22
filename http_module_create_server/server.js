//http require 
const http = require('http');
const port =3000;
const hostname = "127.0.0.1"

const myserver = http.createServer((req,res)=>{
   res.end("hello,I am youre first server");
});

myserver.listen(port,hostname,()=>{
    console.log(`Server is Running Successful at http://${hostname}:${port}`);
});