import { readFile } from "fs/promises";
import {createServer} from "http";
import path from "path";
import crypto from "crypto";
import { text } from "stream/consumers";
import { writeFile } from "fs";

const PORT = 3002;

const Data_File = path.join("data", "links.json")

// this function is only used for re -use the code


const serveFile = async (res, filepath , contentType) => {
    try{
            const data = await readFile(filepath);
            res.writeHead(200, {"Content-Type": contentType });
            res.end(data);
    }catch (error)
    {
        res.writeHead(404, {"Content-type": contentType});
        res.end("404 Page not found");
    }

};

const loadDisk = async() =>{
    try{
        const data = await readFile(Data_File, 'utf-8');
        return JSON.parse(data);
    }catch(error){
        if(error.code === "ENOENT"){
            await writeFile(Data_File, JSON.stringify({

            }));
            return {};
        }throw error;

    }
}

const server = createServer (async (req, res)=>{
    if(req.method === "GET"){
        if(req.url === "/")
        {
            return serveFile(res, path.join("public", "index.html"), "text/html");
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
    // }
    // below is used in case of while  you write css in a seperate css file.


    }else if(req.method === "GET"){
         if(req.url === "/style.css")
         {
            return serveFile(res, path.join("public", "style.css"), "text/css");
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
    if(req.method === "POST" && req.url === "/shorten"){

        const links = await loadDisk();

        let body = "";
        req.on("data", (chunk) =>{
            body += chunk;
        });
        req.on("end", ()=>{
            console.log("Received body:", body);
            const { url, shortCode} = JSON.parse(body);
            if(!url){
                res.writeHead(400, {"content-type": "text/plain"});
                return res.end("URL is required");
            }
            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
        });
    }
});

server.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
});
