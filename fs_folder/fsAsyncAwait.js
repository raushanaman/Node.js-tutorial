const fs = require("fs")
const path = require("path")

const filename = "fsAsyncs.txt";
const filepath = path.join(__dirname,filename);

// const filepath1 = __dirname;

// const readfolder = async () => {
//     try{
//         const data = await fs.promises.readdir(filepath1)
//         console.log(data)
//     }
//     catch(err){
//         console.error(err)
//     }
// }
// readfolder();

// ************************************** crud ******************************
// create (write a file) fs.promises.wirtefile

// const writefile = async () => {
//     try{
//         await fs.promises.writeFile(filepath,"this is initial data", "utf-8")
//         console.log("file created successfully")
//     }
//     catch (error){
//         console.error(err)
//     }
// }
// writefile();

// ***************************  Read a file: ReadFile()

// const readfile = async () => {
//     try{
//         const res = await fs.promises.readFile(filepath, "utf-8")
//         console.log(res);
//     }
//     catch(error)
//     {
//         console.error(err)
//     }
// }
// readfile();


// ***************************  update a file: appendFile()

// const appendfilee = async () => {
//     try{
//         await fs.promises.appendFile(filepath," This is updated data", "utf-8")
//         console.log("data appended successfully")
//     }
//     catch (err){
//         console.error(err)
//     }
// }
// appendfilee();

// Delete: Unlink() method is used to remove the specified file asynchronously.

const delfile = async () => {
    try{
        await fs.promises.unlink(filepath)
        console.log("file removed successfully")
    }
    catch(err){
        console.error(err);
    }
}
delfile();