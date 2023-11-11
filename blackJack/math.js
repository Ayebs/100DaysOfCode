// learning about the math object here

//the random and floor methods

function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}

console.log( rollDice() )


// Ex - scissor-paper-rock game
// Create a function that returns a random item from the array
let hands = ["rock", "paper", "scissor"]

function playGame() {
    let playeMmove = Math.floor(Math.random() * 3)
    return  hands[playeMmove] //playermove here is the index generated with the math obj
}

playGame()
