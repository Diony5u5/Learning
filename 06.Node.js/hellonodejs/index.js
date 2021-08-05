//CommonJS 模块
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content_Type','text/plain');
    res.write('Hello NodeJS');
    res.end();
});

server.listen(port,hostname,()=>{
    console.log('服务器已经启用');
});