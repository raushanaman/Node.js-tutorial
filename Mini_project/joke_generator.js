
import https from 'https';
import chalk from 'chalk';
import { json } from 'stream/consumers';


const getJoke = () =>{
    const url = 'https://official-joke-api.appspot.com/random_joke';

    https.get(url, (response) =>{
        let data ="";
        response.on('data', (chunk)=>{
            data += chunk;
            
        });
        response.on('end', ()=>{
            const joke = JSON.parse(data);
            console.log(`Here is a random joke: `);
            console.log(chalk.red(joke.setup));
            console.log(chalk.blue.bgGreen.bold(joke.punchline));
        })
        response.on('error', ()=>{
            console.log(`Error fetching the joke, ${err.message}`);
        })
    })

}
getJoke();
