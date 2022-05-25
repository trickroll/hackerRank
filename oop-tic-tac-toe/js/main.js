const buttons = Array.from(document.querySelectorAll('.grid li'))
const startGame = document.querySelector('button')
let game
let playerX 
let playerO
const victory =[[1,2,3], [1,4,7]]

class Player {
    constructor(name, symbol){
        this._name = name
        this._symbol = symbol
        this.record = []
     }
     get name(){
        return this._name
    }
    get symbol(){
         return this._symbol
     }
     handleClick(input){
        input.innerHTML = this._symbol
        this.record.push(+input.id)
        console.log(this.record)
    }
 }

class Game {
    constructor(active, next){
        this.active = active
        this.next = next
        this.tmp
        this.displayCurrent()
        this.clearTiles()
    }
    displayCurrent(){
        const title = document.querySelector('h3')
        title.innerText = `Turn: ${this.active.name}`
    }

    handleClick(input) {
        this.active.handleClick(input)
        this.tmp = this.active
        this.active = this.next
        this.next = this.tmp
        this.tmp = null
        this.displayCurrent()
    }

    clearTiles(){
        for (const input of buttons) {
            input.innerText = ""
            }
        }
}



for (const input of buttons) {
    input.addEventListener('click', () => {
        game.handleClick(input)
    })
}

startGame.addEventListener('click', () => {
    playerX = new Player(document.querySelector('#player-x').value ,"X")
    playerO = new Player(document.querySelector('#player-o').value ,"O")
    game = new Game(playerX, playerO)
})

