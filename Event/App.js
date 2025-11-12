// import EventEmmiter Class
const EventEmit = require("events");

// create an instance of EventEmmiter

const emmiterObject = new EventEmit();

// 1. Define an event listener (addListener)

emmiterObject.on("greet", (username) =>{
    console.log(`Hello ${username} this is node.js event module tutorial`);
})

// 2. Trigger (emit) the "greet" event

emmiterObject.emit("greet", "aman");