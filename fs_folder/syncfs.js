const fs = require("fs");
const path = require("path");

// fs.writefilesync() method is used to write data to a file synchronously.
// If the file does not exist, it will be created. If the file exists, it will be overwritten.

// Syntax: fs.writefilesync(path, data,options)

// path: A string representing the file path where the data should be written.
//data: The data to be written to the file. It can be a string or a buffer.
// Options: An optional parameter that can be an object or a string specifying the encoding, mode and flag.


const filename = "example.txt";
const filepath = path.join(__dirname, filename);
// const writefile = fs.writeFileSync(filename,"hello this is example of fs module", "utf-8");
// console.log(`Data written to file ${writefile} successfully.`);

// * fs.readfilesync() methhod is used to read data from a file synchronously. if the file does not exist,
// it will throw an error.

// Syntax: fs.readfilesync(path, options)
// path: A string representing the file path to be read.
// Options: An optional paramenter that can be an object or a strin specifying the encoding and flag.

const filedata = fs.readFileSync(filepath);
console.log(`Data read from file: ${filedata}`);

// * fs.appendfilesync() method is used to append data to a file synchronously. If the file does not exist,
// it will be created. If the file esists, the data will be appended to the end of the file.

// syntax: fs.appendfilesync(filepath, data, options)

// filepath: A string representing the file path where the data should be appedend.
// data: The data to be appended to the file. It can be a string or a buffer.
// Options: An optional parameter that can be an object or a string specifying the encoding,mode and flag.

const appenddata = fs.appendFileSync(filepath, "\n this is appended data", "utf-8");
console.log("data appended successfully.")

// * fs.unlinksync() method is used to delete a file synchronously.
// if the file does not exist, it will throw an error.

// Syntax: fs.unlinksync(path)

// const deletefile = fs.unlinkSync(filepath);
// console.log (`file ${filepath} deletd successfully.`);


// renamefilesync() method is used to rename a file synchronously.
// if the file does not exist, it wiil throw an error.

// Syntax: fs.renameSync(oldPath, newPath)

const updatedfilename = "updated_example.txt";
const updated = path.join(__dirname, updatedfilename);
const renamefile = fs.renameSync(filepath, updated);
console.log(`file renamed succusssfully to ${updaedfilename}`);