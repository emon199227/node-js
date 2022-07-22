//http require 
const http = require('http');
const port =3000;
const hostname = "127.0.0.1"

const myserver = http.createServer((req,res)=>{
    res.writeHead(202,{'Content-Type':'text/plain'});
    //type declar only plain text
    res.write("hello");
    //type declar only plain text so html not showing html behave 
    res.write("<h1>Bangladesh</h1>");
    res.end();
   res.end("hello,I am youre first server");
});

myserver.listen(port,hostname,()=>{
    console.log(`Server is Running Successful at http://${hostname}:${port}`);
});