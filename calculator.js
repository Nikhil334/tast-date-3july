const express = require("express");
const {addition,sub,mul,div,sqrt,pow,log} = require("./operations");

const app = express();
const PORT = 8002;
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Welcome to my calculator");
})
app.post("/add",(req,res)=>{
    let result = addition(req.body.a,req.body.b);
    res.send(`sum of ${req.body.a} and ${req.body.b} is : ${result}`);
})
app.post("/sub",(req,res)=>{
    let result = sub(req.body.a,req.body.b);
    res.send(`subtraction of ${req.body.a} and ${req.body.b} is : ${result}`);
})
app.post("/mul",(req,res)=>{
    let result = mul(req.body.a,req.body.b);
    res.send(`multiplication of ${req.body.a} and ${req.body.b} is : ${result}`);
})
app.post("/div",(req,res)=>{
    let result = div(req.body.a,req.body.b);
    res.send(`division of ${req.body.a} and ${req.body.b} is : ${result}`);
})
app.post("/sqrt",(req,res)=>{
    let result = sqrt(req.body.a);
    res.send(`square root of ${req.body.a} is : ${result}`);
})
app.post("/pow",(req,res)=>{
    let result = pow(req.body.a,req.body.b);
    res.send(`${req.body.a} of power ${req.body.b} is : ${result}`);
})
app.post("/log",(req,res)=>{
    let result = log(req.body.a);
    res.send(`lorthim of ${req.body.a} is : ${result}`);
})
app.listen(PORT,(error)=>{
    console.log(`I m listening at the port ${PORT}`);
})