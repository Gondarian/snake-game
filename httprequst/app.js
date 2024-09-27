const http = require("http");
const fs = require("fs");;//fs.readFile()
const url= require("url");
var myserver = http.createServer(function(req,res){
    let filepath = req.url;
    if(filepath =='/'){
        filepath="/index.html"
    }
    const requestedFil = __dirname + filepath;
    fs.readFile(requestedFil,'UTF-8',(err,data)=>{
        if(err){
            res.writeHead(404);
            res.end("404 page not found");
        }
        else{
            res.writeHead(200,{"content-type":"text/html"});
            res.end(data)
        }
    })
    
    
});
myserver.listen(1234,function(){
    console.log("The server is now listening HTTP request on port 1234");
});
// myserver.close();
