// Create a deck of cards
class Card {
    constructor(suit, number) {
        this.suit = suit
        this.number = number
        this.value = `${this.suit} ${this.number}`
    }
}

class Deck {
    constructor() {
        this.cards = []
        this.newDeck()
    }

    newDeck() {
        this.clear()
        let suits = ['clubs', 'hearts', 'spades', 'diamonds']
        let numbers = ['A', '2', '3','4','5','6','7','8','9','10','J','Q','K']
        suits.forEach( s => {
            numbers.forEach( n => {
                this.cards.push(new Card(s, n))
            })
        })
    }

    shuffle() {
        this.cards.sort(() => Math.random() > 0.5 ? 1 : -1)
    }

    clear() {
        while (this.cards.length > 0) {
            this.cards.pop()
        }
    }

    deal() {
        return this.cards.pop()
    }

}

class Dealer {
    constructor() {
        this.deck = new Deck()
        this.hand = []
    }
    shuffleCards() {
        this.deck.shuffle()
        this.deck.shuffle()
        this.deck.shuffle()
    }
    dealCard() {
        return this.deck.deal()
    }
    receiveCard(card) {
        this.hand.push(card)
    }
}

class Player {
    constructor(name){
        this.hand = []
        this.name = name
    }
    receiveCard(card) {
        this.hand.push(card)
    }
    discardHand() {
        this.hand = []
    }
}

class Table {
    constructor() {
        this.dealer = new Dealer()
        this.players = []
    }
    join(player) {
        if (this.players.length > 5) {
            console.log('table is full')
        }
        else if (this.players.indexOf(player) > -1) {
            console.log('Already at table')
        }
        else {
            this.players.push(player)
        }
    }
    runGame() {
        const dealer = this.dealer
        const players = this.players

        if (players.length === 0) {
            console.log("no players. Game over")
        }
        else {
            console.log("start blackjack")
            dealer.shuffleCards()
            for (let i = 0; i < 2; i++) {
                players.forEach( p => {
                    p.receiveCard(dealer.dealCard())
                })
                dealer.receiveCard(dealer.dealCard())
            }
        }
        // console.log('dealer hand', dealer.hand.map((card) => card.number))
        // players.forEach((player) => {
        //     console.log(`${player.name} hand`, player.hand.map((card) => card.value))
        // })
        this.checkWin(dealer, players)
    }

    handTotal(hand) {
        return hand.reduce((ans, card) => {
            switch(card.number) {
                case 'A' : 
                    ans +=1;
                    break;
                case 'J' : 
                    ans +=10
                    break;
                case 'Q' : 
                    ans +=10
                    break;
                case 'K' : 
                    ans +=10
                    break;
                default : 
                    ans +=Number(card.number)
            }
            return ans
        },0)
    }

    checkWin(dealer, players) {
        const dealerHand = this.handTotal(dealer.hand)
        // console.log('Dealer hand: ', dealerHand)
        players.forEach( player => {
            const playerHand = this.handTotal(player.hand)
            // console.log(`${player.name} hand: `,playerHand)
            if ((playerHand > 21) || ((playerHand < dealerHand) && (dealerHand <= 21))) {
                console.log(`Lose! ${player.name} hand is: ${playerHand}; Dealer hand is: ${dealerHand}`)
            }
            else if (playerHand === dealerHand) {
                console.log(`Tie! ${player.name} hand is: ${playerHand}; Dealer hand is: ${dealerHand}`)

            }
            else {
                console.log(`Win! ${player.name} hand is: ${playerHand}; Dealer hand is: ${dealerHand}`)
            }
        } )
    }
}


/* TEST */
var table = new Table();
var eugene = new Player("eugene");
var david = new Player("david");
var luis = new Player("luis");
var eric = new Player("eric");
var john = new Player("john");

table.join(eugene);
table.join(david);
table.join(luis);
table.join(eric);
table.join(john);

/* build until dealing of first hand */
table.runGame();