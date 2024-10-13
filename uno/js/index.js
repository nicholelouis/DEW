import { Deck } from "./cards.js";

const button = document.querySelector("button");
button.addEventListener("click", () => {
    document.querySelector('#button').style.visibility = 'hidden';
    document.querySelector('#cards').style.visibility = 'visible'; 
    document.querySelector('#logo').style.visibility = 'hidden';
    startUno();
});

//----------------------

let deck1 = new Deck();

console.log(deck1.deck);