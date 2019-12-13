/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

/**
 * An array of quotes objects
 */
let quotes = [
  {
    quote: "All knowledge is spendable currency, depending on the market",
    source: "Maya Angelou",
    citation: "From the book titled : I know Why the Caged Bird Sings",
    year: 1969
  },

  {
    quote:
      "There is a time in every man’s life when he must push off from the wharf of safety into the sea of chance",
    source: "Maya Angelou",
    citation: "From the book titled : I know Why the Caged Bird Sings",
    year: 1969
  },
  {
    quote:
      "“I think you travel to search and you come back home to find yourself there",
    source: "Chimamanda Ngozi Adichie"
  },

  {
    quote: "Muddy water is best cleared by leaving it alone",
    source: "Alan Watts"
  },

  {
    quote: "Life is what happens when you are busy making other plans",
    source: "John Lennon"
  },

  {
    quote:
      "Self-love is the least aggressive, most effective form of intimidation",
    source: "Chidera Eggerue",
    citation: "From the book titled : What a time to be alone",
    year: 2018
  },

  {
    quote: "You learn how to cut down trees by cutting them down",
    source: "Bateke proverb"
  },

  {
    quote:
      "Your current situation doesn't determine your destination... you do.",
    source: "Coach jae",
    citation: "iamlifeskills",
    year: 2000
  }
];

/**
 * This is a getRandomQuote function
 * @param {array} An array of  quotes objects passed to the getRandomQuote function
 * @return {string}  A single  quote
 */

const getRandomQuote = quotes => {
  randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};
getRandomQuote(quotes);

/**
 * An array of different colors  used by the randomBackgroundColor function to change the background  colors randomly.
 */

let backgroundColor = [
  "#228b22",
  "#b22",
  "#000080",
  "#639",
  "#008000",
  "#b8860b",
  "#a9a9a9"
];

/**
 * A function called on the backgroundColor which returns colors randomly
 * @param {array}  An array of hex colors
 */
const randomBackgroundColor = backgroundColor => {
  randomNumber = Math.floor(Math.random() * backgroundColor.length);
  return backgroundColor[randomNumber];
};
randomBackgroundColor(backgroundColor);

/**
 * The `printQuote` function calls the `getRandomQuote` function and assign it to a variable called randomQuote.
 * The properties of the quote object   are used to create the HTML string placed in the "html" variable.
 * The conditionals statement checks if  the optional properties exist before added them to the HTML string.
 * setting the background color using the randomBackgroundColor function.
 * setting the `innerHTML` of the `quote-box` div to the HTML string.
 */

let html;

function printQuote() {
  const randomQuote = getRandomQuote(quotes);

  html = '<p class="quote">' + randomQuote.quote + "</p>";
  html += '<p class ="source">' + randomQuote.source;
  if (randomQuote.citation) {
    html += '<span class="citation">' + randomQuote.citation + "</span>";
  }
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + "</span>";
  }

  ("</p>");

  document.body.style.backgroundColor = randomBackgroundColor(backgroundColor);

  document.getElementById("quote-box").innerHTML = html;
}

/**
 * An event listener which listens for a click event and calls the printQuote function when the loadQuote button is clicked
 *@param {function printQuote() {}}* A function which receives a click notification when the button is clicked.
 */

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

/**
 *@param {function}  A function called on setInterval() method.
 */

setInterval(printQuote, 3000);
