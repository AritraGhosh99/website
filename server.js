var http=require('http');
var app=require('./app');
const port=2000;

http.createServer(app.handelRequest).listen(port,()=>{
    console.log(`server is now listening on port ${port}`);
})