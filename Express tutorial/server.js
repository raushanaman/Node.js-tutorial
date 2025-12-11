//steps to create a server through express js.

import express from "express";
 const app = express();

 //create a route to home page while server is load.

 app.get("/", (req,res)=> res.send("<h1>Hello world!</h1>"));

 // using multiple line below:
 app.get("/about", (req,res)=>{
   return res.send("hello about page");
 });

 const port = 3000;
 app.listen(port, ()=>{
    console.log(`server is running at port:${port}`);
 })