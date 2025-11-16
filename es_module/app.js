
//const math = require('./math'); // this is another way to import all functions or files in node js


// default import below
import mult from "./math.js";
// named import below
import {add} from "./math.js";

// import all functions at once below
import {div, sub} from "./math.js";

console.log("addition: " + add(4,5));
console.log("subtraction: " + sub(9,4));
console.log("multiplication: " + mult(7, 7));
console.log("division: " + div (10,4));

//******************************************************************************