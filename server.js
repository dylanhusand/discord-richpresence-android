const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("SERVER IS READY")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("SERVER IS READY")});
}
module.exports = keepAlive