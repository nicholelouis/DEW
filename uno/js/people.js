export class Player{
    constructor(name){
        this.name = name;
        this.cards = [];
    }
    recieve_cards(cards){
        this.cards = cards;
    }
}

export class Dealer{
    constructor(deck, player1, player2){
        this.deck = deck
        this.player1 = player1;
        this.player2 = player2;
    }
    shuffle(){
        this.deck.sort(() => Math.random() - 0.5);
    };

    deal_cards(){
        for (let i = 0; i<7; i++){
            this.player1.recieve_cards(this.deck.pop())
            this.player1.recieve_cards(this.deck.pop())
        }
    }
}