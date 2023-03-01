const tiles = document.querySelectorAll('.tile')
const player1 = new Player('Ramona', "https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg")
const player2 = new Player('Scott', "https://ih1.redbubble.net/image.407171044.0078/st,small,507x507-pad,600x600,f8f8f8.u2.jpg")
var currentTurn = player1 // this is establishing that the current turn is Ramona

const currentBoard = Array(tiles.length) // This is setting the board as a constant
// by using Array it calls forth the length of our tiles from line 1
currentBoard.fill(null) // This is what im going to use to reset game board


tiles.forEach((tile) => tile.addEventListener("click", useTurn))
// this is saying that for each tile i have contained in my constant tile,
// that i can run my event listener for useTurn
var currentPlayerDisplay = document.querySelector('.display-player')
if (currentTurn === player1) {
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
    if (currentTurn === player1) {
        tile.innerHTML =`<img src="https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an X" width="50" height="">`
        currentBoard[tileNumber - 1] = player1;
        currentPlayerDisplay.innerHTML = `<img src="https://ih1.redbubble.net/image.407171044.0078/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an O" width="50" height="">`
        currentTurn = player2
    } else { // this if statement is saying if the currentTurn is
        // player1 then the innerText
        tile.innerHTML = `<img src="https://ih1.redbubble.net/image.407171044.0078/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an O" width="50" height="">`
        currentBoard[tileNumber - 1] = player2;
        currentPlayerDisplay.innerHTML = `<img src="https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an X" width="50" height="">`
        currentTurn = player1
    }
   checkWin()    
}
function checkWin() {

}
function clearGameBoard() {

}