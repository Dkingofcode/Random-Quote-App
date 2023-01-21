

let quote  = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url).then((response) => response.json())
    .then((item) => {
           quote.innerText = item.content;
           author.innerText = item.author;
    })
}


window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);












