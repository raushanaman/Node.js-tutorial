const path = require("path");

console.log(__dirname)
console.log (__filename)
const filepath = path.join("folder1", "student", "index.html");
console.log (filepath);
// there is one important method that is parse() it will  parse the file path and return an object
// containing the root, dir, base, ext, name properties of the path to know more read the ppt of thapa technical
const fileobj = path.parse(__filename);
console.log(fileobj);