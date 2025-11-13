// import EventEmmiter Class
const EventEmit = require("events");

// create an instance of EventEmmiter

const emitObject = new EventEmit();

// 1. Define an event listener (addListener)

// emitObject.on("greet", (username) =>{
//     console.log(`Hello ${username} this is node.js event module tutorial`);
// })

const eventCounts = {
    "login": 0,
    "purchase": 0,
    "update": 0,
    "Logout" : 0
};

emitObject.on("user-login",
    (username) => {
        eventCounts.login += 1;
        console.log(`Welcome! ${username} you successfully login.`);
    }
)

emitObject.on("purchase", (username, product) => {
    eventCounts.purchase += 1;
    console.log(`Congratulations ${username} your order ${product} is successfully placed.`);
 });

 emitObject.on("update", (username, lastname) => {
    eventCounts.update += 1;
    console.log(`${username} your profile is successfully updated to ${username} ${lastname}`);
 })

 emitObject.on("logout", (username) => {
    eventCounts.Logout += 1;
    console.log(`${username} your are successfully logged out`);
 })

 emitObject.on("summary", () => {
    console.log(eventCounts);
 })

// 2. Trigger (emit) the "greet" event 

// emmiterObject.emit("greet", "aman");

emitObject.emit("user-login", "aman");
emitObject.emit("purchase", "aman" , "laptop");
emitObject.emit("update", "aman", "Raushan");
emitObject.emit("logout", "aman")
emitObject.emit("summary");
