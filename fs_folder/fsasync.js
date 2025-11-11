const fs = require("fs");
const path = require("path");

const filename = "example_async.txt";
const filepath = path.join(__dirname, filename);

// 1. fs.writefile() method is used to write dat to a file asynchronously.
// If the file does not exist, it will be  created. If the file exists, it will  be overwritten.

// Syntax: fs.writefile(path, data, options, callback)
// path: A string represent the  file path where the data should be weritten.
// data: The data to be written to the file. It can be a string or a buffer
// Options: An optional parameter that can be an object or a string specifying the encoding, mode and flag.
// callback: A function that will be called when the write operation is complete. It takes an error parameter that will be null if the operation
//was successful.


fs.writeFile(filepath, "hello this is an example of asynchronous fs module", "utf-8", 
    (err) => {
        if (err) throw err;
        else{
            console.log(`Data written to file ${filename} successfully.`);
        }
    }
);

// 2. fs.readfile() method is used to read data from a file asynchronously. If the file does not exist,
// it will throw an error.

// Syntax: fs.readfile(path, options, callback)
// path: A string representing the file path to be read.
// Options: An optional parameter that can be an object or a string specifying the encoding and flag.
// callback: A function that will be called when the read operation is complete. It takes two parameters: an error parameter that will be null if the operation
// was successful, and a data parameter that contains the content of the file.

fs.readFile(filepath, "utf-8", (err, data) => {
    if (err) throw err;
    else{
        console.log(data);
    }
});

//3. fs.appendfile() method is used to append data to a file asynchronously. If the file does not exist,
// it will be created.

// Syntax: fs.appendfile(path, data, options, callback)

fs.appendFile(filepath, "\nThis is appended data.", "utf-8",
    (err) => {
        if(err)
            console.error(err);
        else{
            console.log(`Data appended to file ${filename} successfully.`);
        }
    }
);

// 4. fs.unlink() method is used to delete a file asynchronously. If the file does not exist, it will
// throw an error.

// Syntax: fs.unlink(path, callback)

fs.unlink(filepath, (err) => {
    if (err) 
        console.error(err);
    else{
        console.log(`File ${filename} deleted successfully.`);
    }
});