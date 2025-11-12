const fs = require("fs");
const path = require ("path");

//const filename1 = example_promises.txt;
//const filepath = path.join(__dirname, filename1);


// why .then() and .cath() are used.
//.then() is used to handle the resolved value of a promise. It ensures clear 
// chaining of multiple asynchronous operations.
// .catch() is used to handle any errors that may occur during the execution of the promise.
// It provides a centralized way to manage errors in asynchronous code.


// The file name to read
// const filename = __dirname
// // Full path to the file


// // Reading a file using Promises
// fs.promises
//   .readdir(filename) // add encoding to get string
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));


// ************************************** crud ******************************

// create (write a file) fs.promises.wirtefile
// create or overwirte a file with the specified content.
// the writefile() method write data into the file asynchronously.
// if the file does not exist it is created
// if it exist, then it's content is replaced

// syntax: fs.promises.writefile(path, data, options).then().catch();

const filename2 = "pksEx.txt";
const filepath = path.join(__dirname, filename2);

fs.promises.writeFile(filepath,"this is initial data","utf-8")
.then(console.log("file created successfully"))
.catch((err)=>{
    console.error(err);
})
