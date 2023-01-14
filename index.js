const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", getQuote);

async function getQuote() {
  quoteEl.textContent = "Loading....";
  authorEl.textContent = "";
  let response = await fetch("https://api.quotable.io/random");
  let data = await response.json();
  quoteEl.textContent = '"' + data.content + '"';
  authorEl.textContent = data.author;
}
