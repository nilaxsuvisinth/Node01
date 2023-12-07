// console.log("Hello")

// Creat a server
const http=require('http')
const port=3000;
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('Hello World');
});
server.listen(port,()=>{
    console.log(`server running at ${port}`)
});

const fs=require('fs');
fs.writeFile('file.txt','hello,world',(err)=>{
    if (err)throw err;
    console.log("data written file")
});

// read file
fs.readFile('file.txt','utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});

// import module in node.js
const app=require('./app');
app.sayHello();

const axios = require('axios');

axios.get('https://example.com')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
