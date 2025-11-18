import readline from "readline";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const todos =[];

const showMenu = () =>{
    console.log("\n 1: Add a task");
    console.log("\n 2: view task");
    console.log("\n 3: exit");

    rl.question("Choose an option: ", handleInput);

}
const handleInput = (option) => {
    if(option === "1"){
        rl.question("Enter the task: ", (task)=>{
            todos.push(task);
            console.log("Task Added: ", task);
            showMenu();
        })
        
    }
     else if(option === "2"){
        console.log("\n Your Todo list");
        todos.forEach((task, index) =>{
            console.log(`${index + 1}.${task}`)
        })
        showMenu();
    }else if(option === "3")
    {
        console.log("Have a good day");
        rl.close();

    }
    else{
        console.log("Invalid option. Please try again");
        showMenu();
    }
}


showMenu();