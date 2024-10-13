import Card from './cards.js';
import { Deck, Player } from './people.js';

const button = document.querySelector("button");
button.addEventListener("click", () => {
    document.querySelector('#button').style.visibility = 'hidden';
    document.querySelector('#cards').style.visibility = 'visible'; 
    document.querySelector('#logo').style.visibility = 'hidden';
    startUno();
});

//----------------------

// Crear las Cartas
const cards = [];
const colors = ['blue', 'red', 'yellow', 'green'];
const especial = ['skip', 'reverse', 'draw two']
const wild_cards = ['draw four', 'change color']

// plane cards
function planeCards(){
    for (let color of colors) {
        for (let i = 0; i < 10; i++) {
            if (i === 0){
                let card = new Card({
                    num: i,
                    color: color,
                    especial: null,
                    value: 1
                });
                cards.push(card);}
            else{
                for (let j = 0; j < 2; j++){
                    let card = new Card({
                        num: i,
                        color: color,
                        especial: null,
                        value: 1
                    });
                    cards.push(card);
                }
            }
        }
    }
}
// especial cards (reversa, skip, +2)

function especialCards(){
    for (let color of colors){
        for (let e of especial) {
            for (let i = 0; i < 2; i++) {
                let card = new Card({
                    num: null,
                    color: color,
                    especial: e,
                    value: 2
                })
                cards.push(card);
        }}}
}
// wild cards (Cambio color y +4)

function wildCards(){
for (let w of wild_cards) {
    for (let i = 0; i < 4; i++) {
        let card = new Card({
            num: null,
            color: null,
            especial: w,
            value: 3
        })
        cards.push(card);
}}
}

wildCards();
especialCards();
planeCards();
console.log(cards, cards.length);

//-----------------------------------------------------

const startUno = async () => {

}