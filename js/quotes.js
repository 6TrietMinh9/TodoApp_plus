const quotes = [
    {
        quote: "Life is not fair, get used to it!",
        author: "Bill Gates",
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "Life is short. Smile while you still have teeth.",
        author: "Mallory Hopkins",
    },
    {
        quote: "Life is like a coin. You can spend it anyway you wish, but you only spend it once.",
        author: "Lillian Dickson",
    },
    {
        quote: "Today is hard, tomorrow will be worse but the day after tomorrow will be sunshine.",
        author: "Jack Ma",
    },
    {
        quote: "Your voice can change the world.",
        author: "Barack Obama",
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso",
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life.",
        author: "Steve Job",
    },
    {
        quote: "Life is what happens to us while we are making other plans.",
        author: "Allen Saunders",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const chosenQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${chosenQuote.quote}`;
author.innerText = `${chosenQuote.author}`;
