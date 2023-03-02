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
        currentBoard[tileNumber - 1] = player1; // im doing tileNumber - 1 because in my HTML
        // my tiles are numbered 1-9 and because arrays start from 0 i need to take away 1 from whatever
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
    for (var i = 0; i < winnerCombos.length; i++) {
        
        const combo = winnerCombos[i].combo
        const win1 = currentBoard[combo[0]-1]
        //combo[0] is targeting the array of numbers in winnerCombos with the first index position adn
        // then subtracting one because index position begins at 0 and our tiles are 1-9
        // so we are getting 0,1,6,0,1,2,0,2 same thing for the next two
        // we are doing this so we can run an if statement to see if a win is met
        const win2 = currentBoard[combo[1]-1]
        const win3 = currentBoard[combo[2]-1]
        
        if ( win1 != null && win1 === win2 && win1 === win3) {
            console.log('hello')
            
        }
    }   
}

const winnerCombos = [ //This is a constant because they wont change and referring to the chart
// on line 17-19 it showcases our gameboard and their respectiv epositions and what is a win
{combo: [1,2,3]},
{combo: [4,5,6]},
{combo: [7,8,9]},
{combo: [1,4,7]},
{combo: [2,5,8]},
{combo: [3,6,9]},
{combo: [1,5,9]},
{combo: [3,5,7]}
]

// here we have an array with objects in it and an array in the objects
// research how to access nested array, most likely for loop

// 1  2  3
// 4  5  6
// 7  8  9
function clearGameBoard() {
    
}