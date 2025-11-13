// first we import the http module

const http = require("http");

// create a server object
const server = http.createServer((req, res) =>{
    if(req.url === "/")
    {
        res.write("Hello i am aman raushan");
        res.end();
    }

    if(req.url === "/source-code")
    {
        res.write("Client send request through server for the source code");
        res.end();
    }
});


const port = 3000;

// server listen method

server.listen(port, () =>{
    console.log(`listening on port ${port}`);
});