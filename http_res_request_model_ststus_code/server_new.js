//http require 
const http = require('http');
const port =3000;
const hostname = "127.0.0.1"

const myserver = http.createServer((req,res)=>{
    res.writeHead(202,{'Content-Type':'text/html'});
    //type declar only html  text.so plain text not showing plain text  behave
    res.write("hello");
    //type declar only html tag 
    res.write("<h1>Bangladesh</h1>");
    res.end();
   res.end("hello,I am youre first server");
});

myserver.listen(port,hostname,()=>{
    console.log(`Server is Running Successful at http://${hostname}:${port}`);
});