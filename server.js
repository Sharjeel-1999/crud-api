// const http = require('http');

// const PORT = 10000

// const server =  http.createServer((req,res)=>{

//     console.log(req,'req');

//     if(req.url === "/"){
//         res.setHeader("Content-Type","application/json");
//         return   res.end("<h1>Hello World</>")
//     }
//     else if (req.url === "/login"){
//         res.setHeader("Content-Type","application/json");
//         return  res.end("Successfull login")
//     }
//     res.end('Invalid Request')
//     console.log("RUNNING SERVER",PORT);

// })

// server.listen(PORT);

const express = require('express');
const mainRouter = require('./route/index')


const app = express();
const PORT = 10000;

let users = [
    { name: 'User 1', id: 1},
    { name: 'User 2', id: 2},
    { name: 'User 3', id: 3},
    { name: 'User 4', id: 4},
]

/////it enables our server to read JSON data 
const urlParser = express.json();
app.use(urlParser);
app.use(mainRouter)

app.get("/", (req, res) => {
    return res.send("Express Docker Heroku Container Registry JP Backend");
  });

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})