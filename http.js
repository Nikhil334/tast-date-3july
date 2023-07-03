const http = require("http");



const server = http.createServer((req,res)=>{
    res.write("hello");
    res.end();
    console.log("I m at server 5000");
});
server.listen(8000);
