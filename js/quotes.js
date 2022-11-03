const quotes = [
  { quote: "Don't dwell on the past.", author: "anonym" },
  { quote: "Believe in yourself.", author: "anonym" },
  { quote: "Follow your heart.", author: "anonym" },
  { quote: "Seize the day.", author: "anonym" },
  { quote: "Don't dream, Be it", author: "Tim Curry" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
