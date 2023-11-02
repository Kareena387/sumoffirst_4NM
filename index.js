// Calculate sum using a callback function
const sumFirstFourNumbersCallback = (callback) => {
    const numbers = [1, 2, 3, 4];
    const sum = numbers.reduce((acc, current) => acc + current, 0);
    callback(sum);
};

// Promisifying the function
const sumFirstFourNumbersPromise = () => {
    return new Promise((resolve, reject) => {
        sumFirstFourNumbersCallback(resolve);
    });
};

// Using async/await to display the sum
const displaySumAsyncAwait = async () => {
    try {
        const result = await sumFirstFourNumbersPromise();
        console.log("Sum of first 4 natural numbers:", result);
    } catch (error) {
        console.error("Error:", error);
    }
};

// Call the async function
displaySumAsyncAwait();