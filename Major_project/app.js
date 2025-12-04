import { readFile } from "fs/promises";
import {createServer} from "http";
import path from "path";
import { text } from "stream/consumers";

const PORT = 3002;

// this function is only used for re -use the code


const servefile = async (res, filepath , content-type) => {
    try{
            const data = await readFile(filepath);
            res.writeHead(200, {"Content-Type": contentType });
            res.end(data);
    }catch (error)
    {
        res.writeHead(404, {"Content-type": contentType});
        res.end("404 Page not found");
    }

}

const server = createServer (async (req, res)=>{
    if(req.method === "GET"){
        if(req.url === "/")
        {
            return serveFile(res, path.join("public", "index.html"), text/html));
        }
    //     try{
    //         const data = await readFile(path.join("public", "index.html"));
    //         res.writeHead(200, {"Content-Type": "text/html" });
    //         res.end(data);
    // }catch (error)
    // {
    //     res.writeHead(404, {"Content-type": "text/html"});
    //     res.end("404 Page not found");
    // }
    }
    // below is used in case of while  you write css in a seperate css file.


    else if(req.method === "GET"){
         if(req.url === "/style.css")
         {
            return servefile(res, path.join("public", "style.css"), "text/css"));
         }
    //     try{
    //         const data = await readFile(path.join("public", "style.css"));
    //         res.writeHead(200, {"Content-Type": "text/css" });
    //         res.end(data);
    // }catch (error)
    // {
    //     res.writeHead(404, {"Content-type": "text/html"});
    //     res.end("404 Page not found");
    // }
        
    }
});

server.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
});
