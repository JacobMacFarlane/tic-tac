const tiles = document.querySelectorAll('.tile')
var currentGame = new Game()

var currentTurn = currentGame.player1 // this is establishing that the current turn is Ramona


// currentGame.currentBoard = Array(tiles.length) // This is setting the board as a constant
// // by using Array it calls forth the length of our tiles from line 1
// currentGame.currentBoard.fill(null) // This is what im going to use to reset game board
// console.log(currentGame.currentBoard)
// console.log(currentGame.player1)
// console.log(currentGame.player2)
tiles.forEach((tile) => tile.addEventListener("click", useTurn))
// this is saying that for each tile i have contained in my constant tile,
// that i can run my event listener for useTurn
var currentPlayerDisplay = document.querySelector('.display-player')
if (currentTurn === currentGame.player1) {
    currentPlayerDisplay.innerHTML = `<img src="https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an X" width="50" height="">`
} else {
    currentPlayerDisplay.innerHTML = `<img src="https://ih1.redbubble.net/image.407171044.0078/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an O" width="50" height="">`
}
function useTurn(event) {
    const tile = event.target;
    const tileNumber = tile.dataset.index
    if (tile.innerText != "") {
        return;
    }
    // this if statement is saying that if something is in the tile
    // then you cant place anything there and the function will end
    if (currentTurn === currentGame.player1) {
        tile.innerHTML =`<img src="https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an X" width="50" height="">`
        currentGame.currentBoard[tileNumber - 1] = currentGame.player1; // im doing tileNumber - 1 because in my HTML
        // my tiles are numbered 1-9 and because arrays start from 0 i need to take away 1 from whatever
        currentPlayerDisplay.innerHTML = `<img src="https://ih1.redbubble.net/image.407171044.0078/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an O" width="50" height="">`
        currentTurn = currentGame.player2
        currentGame.checkWin()
        displayWinner()
        currentGame.takeTurn()
    } else { // this if statement is saying if the currentTurn is
        // player1 then the innerText
        tile.innerHTML = `<img src="https://ih1.redbubble.net/image.407171044.0078/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an O" width="50" height="">`
        currentGame.currentBoard[tileNumber - 1] = currentGame.player2;
        currentPlayerDisplay.innerHTML = `<img src="https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an X" width="50" height="">`
        currentTurn = currentGame.player1
        currentGame.checkWin()
        displayWinner()
        currentGame.takeTurn()
    }
}
function displayWinner() {
    var startDisplay = document.querySelector('.start-display')
    var win1Display = document.querySelector('.winner1')
    var win2Display = document.querySelector(".winner2")
    var draw = document.querySelector('.draw')
    if (currentGame.gameOver === true && currentGame.winner === currentGame.player1) {
       console.log('hello')
        startDisplay.classList.add('hidden')
        win1Display.classList.remove("hidden") 
    } else if 
    (currentGame.gameOver === true && currentGame.winner === currentGame.player2) {
        startDisplay.classList.add('hidden');
        win2Display.classList.remove("hidden")
    } else if
    (currentGame.gameOver === true && currentGame.draw === true) {
        startDisplay.classList.add('hidden');
        draw.classList.remove('hidden')
    }
}

function clearGameBoard() {

    currentGame.currentBoard.fill(null)
}