export default class Card{
    constructor(data) {
        this.num = data.num;
        this.color = data.color;
        this.especial = data.especial;
        this.value = data.value;
    }
}

//------------------------------------------------------------------

export class Deck{
    constructor(){
        this.deck = [];
        this.planeCards();  
        this.especialCards(); 
        this.wildCards(); 
    }
    
    planeCards(){
        const colors = ['blue', 'red', 'yellow', 'green'];
        for (let color of colors) {
            for (let i = 0; i < 10; i++) {
                if (i === 0){
                    let card = new Card({
                        num: i,
                        color: color,
                        especial: null,
                        value: 1
                    });
                    this.deck.push(card);;}
                else{
                    for (let j = 0; j < 2; j++){
                        let card = new Card({
                            num: i,
                            color: color,
                            especial: null,
                            value: 1
                        });
                        this.deck.push(card);
                    }}}}}

    especialCards(){
        const colors = ['blue', 'red', 'yellow', 'green'];
        const especial = ['skip', 'reverse', 'draw two']
        for (let color of colors){
            for (let e of especial) {
                for (let i = 0; i < 2; i++) {
                    let card = new Card({
                        num: null,
                        color: color,
                        especial: e,
                        value: 2
                    })
                    this.deck.push(card);
                            }}}
                    }
    wildCards(){
        const wild_cards = ['draw four', 'change color']
        for (let w of wild_cards) {
            for (let i = 0; i < 4; i++) {
                let card = new Card({
                    num: null,
                    color: null,
                    especial: w,
                    value: 3
                    })
                    this.deck.push(card);
                        }}
                        }
}

//------------------------------------------------------