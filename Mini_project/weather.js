import { response } from "express";
import readline from "readline/promises";


const apiKey = '27cfc8d0c4b8df5f08069ec450b5cff7';
const base = 'https://api.openweathermap.org/data/2.5/weather';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const getWeather = async (city) =>{
        const url = `${base}?q=${city}&appid=${apiKey}&units=metric`;
;
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new error('City not found. Please enter valid city');
            }
            const weatherData = await response.json();
            console.log('\nWeather Information: ');
            console.log(`City: ${weatherData.name}`);
            console.log(`Temperature: ${weatherData.main.temp} °C`);
            console.log(`Weather: ${weatherData.weather[0].description}`);
            console.log(`Humidity: ${weatherData.main.humidity}%`);
            console.log(`Wind Speed: ${weatherData.wind.speed}m/s\n`);

        }catch(error){
            console.log(error);
        }


}

const city = await rl.question("Enter the city name to get the weather: ");
await getWeather(city);
rl.close();