//steps to create a server through express js.

import express from "express";
import { PORT } from "./env.js";
import path from "path";


 const app = express();

 // Middleware should be outside routes
 const staticPath = path.join(import.meta.dirname,"public");

 app.use("/public", express.static(staticPath));// if use this way to send file 
 // then u must mention /public in the url

//  app.get("/", (req,res)=>{
//    // console.log(import.meta.dirname);// if i want to get directory name 
//    // console.log(import.meta.url);// if i want to get file
//    //res.send("<h1>Hello world!</h1>");
//    // below is the example of how to send files in express
//    // const homePage = path.join(import.meta.dirname,"public", "index.html");
//    // res.sendFile(homePage);
//  })

//route parameters in express js below: 
app.get("/profile/:username",(req,res) =>{
  console.log(req.params);
  res.send(`<h1>My username is ${req.params.username}</h1>`)
})
//slug is an unique identifier it is mainly used for representation mainly  used here to get multiple dynamic url
app.get("/profile/:username/article/:slug", (req,res) =>{
    console.log(req.params);
    const formatedSlug = req.params.slug.replace(/-/g, " "); // here we use Regex 
    res.send(`<h1>Article ${req.params.username} by ${formatedSlug}</h1>`)
})

 //const port = 3000;
 //onst port = process.env.PORT||3000; // here i defined port number in powershell
 app.listen(PORT, ()=>{
    console.log(`server is running at port:${PORT}`);
 })