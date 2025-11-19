import https from "https";
import Readline from "readline";

const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Use a currency exchange API with data in expected JSON format
const apiKey = 'f1d48de63c28e524e44a64b0'; // Replace with a valid API key
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
};

https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data += chunk;
    });

    response.on("end", () => {
        if (!data) {
            console.error("Empty response received from API.");
            rl.close();
            return;
        }

        try {
            const jsonData = JSON.parse(data);

            if (jsonData.result !== "success") {
                console.error("API returned an error or invalid data:", jsonData['error-type'] || 'Unknown error');
                rl.close();
                return;
            }

            const rates = jsonData.conversion_rates;

            rl.question("Enter the amount in USD: ", (amount) => {
                if (isNaN(amount) || amount.trim() === "") {
                    console.log("Invalid amount entered.");
                    rl.close();
                    return;
                }
                rl.question("Enter the target currency (e.g. INR, EUR, NPR): ", (currency) => {
                    const target = currency.toUpperCase();
                    const rate = rates[target];

                    if (rate) {
                        console.log(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${target}`);
                    } else {
                        console.log(`Invalid currency code: ${target}`);
                    }
                    rl.close();
                });
            });
        } catch (error) {
            console.error("Failed to parse JSON response:", error.message);
            rl.close();
        }
    });

    response.on("error", (err) => {
        console.error("Error with the request:", err.message);
        rl.close();
    });
});
