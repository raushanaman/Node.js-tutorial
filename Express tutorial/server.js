//steps to create a server through express js.

import express from "express";
import { PORT } from "./env.js";
import path from "path";
 const app = express();

 //create a route to home page while server is load.
// Below example is just for learning purpose
//  app.get("/", (req,res)=> res.send("<h1>Hello world!</h1>"));

//  // using multiple line below:
//  app.get("/about", (req,res)=>{
//    return res.send("hello about page");
//  });

app.get("/", (req,res)=>{
  // console.log(import.meta.//dirname);// if i want to get directory name 
  // console.log(import.meta.url);// if i want to get file
  //  res.send("hello world!");
  // below is the example of how to send files in express
  const homePage = path.join(import.meta.dirname,"public", "index.html");
  res.sendFile(homePage);
})


 //const port = 3000;
 //onst port = process.env.PORT||3000; // here i defined port number in powershell
 app.listen(PORT, ()=>{
    console.log(`server is running at port:${PORT}`);
 })