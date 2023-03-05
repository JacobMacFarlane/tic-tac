const tiles = document.querySelectorAll('.tile')
var startDisplay = document.querySelector('.start-display')
var win1Display = document.querySelector('.winner1')
var win2Display = document.querySelector(".winner2")
var showDraw = document.querySelector('.draw')
var win1 = document.querySelector('.wins1')
var win2 = document.querySelector('.wins2')
var currentGame = new Game()

var currentTurn = currentGame.player1 // this is establishing that the current turn is Ramona







tiles.forEach(tile => tile.addEventListener("click", useTurn))

var currentPlayerDisplay = document.querySelector('.display-player')
if (currentTurn === currentGame.player1) {
    currentPlayerDisplay.innerHTML = `<img src="https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an X" width="50" height="">`
} else {
    currentPlayerDisplay.innerHTML = `<img src="https://ih1.redbubble.net/image.407171044.0078/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an O" width="50" height="">`
}
function useTurn(event) {
    if (startDisplay.classList.contains('hidden')) {
        return
    }
    const tile = event.target;
    const tileNumber = tile.dataset.index
    if (tile.innerText != "") {
        return;
    }
    if (currentTurn === currentGame.player1) {
        tile.innerHTML =`<img src="https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an X" width="50" height="">`
        currentGame.currentBoard[tileNumber - 1] = currentGame.player1; 
        currentGame.turnsTaken1.push(currentGame.player1)
        currentPlayerDisplay.innerHTML = `<img src="https://ih1.redbubble.net/image.407171044.0078/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an O" width="50" height="">`
        currentTurn = currentGame.player2
        currentGame.checkWin()
        displayWinner()
        increaseDisplayWins()
        
        currentGame.takeTurn()
    } else { 
        tile.innerHTML = `<img src="https://ih1.redbubble.net/image.407171044.0078/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an O" width="50" height="">`
        currentGame.currentBoard[tileNumber - 1] = currentGame.player2;
        currentGame.turnsTaken2.push(currentGame.player2) 
        currentPlayerDisplay.innerHTML = `<img src="https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an X" width="50" height="">`
        currentTurn = currentGame.player1 
        currentGame.checkWin()
        displayWinner()
        increaseDisplayWins()
        currentGame.takeTurn()
    }
}
function displayWinner() {
    if (currentGame.gameOver === true && currentGame.winner === currentGame.player1) {
        // startDisplay.innerHTML = `<img src="https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an X" width="50" height=""> has won`
        startDisplay.classList.add("hidden")
        win1Display.classList.remove("hidden") 
        setTimeout(clearGameBoard, 2000)
    } else if 
    (currentGame.gameOver === true && currentGame.winner === currentGame.player2) {
    //    startDisplay.innerHTML = `<img src="https://ih1.redbubble.net/image.407171044.0078/st,small,507x507-pad,600x600,f8f8f8.u2.jpg" alt="This is an O" width="50" height=""> has won`
        startDisplay.classList.add("hidden");
        win2Display.classList.remove("hidden")
        setTimeout(clearGameBoard, 2000)
    } else if
    (currentGame.gameOver === true && currentGame.draw === true) {
    //    startDisplay.innerHTML = 'No one has won!'
        startDisplay.classList.add("hidden");
        showDraw.classList.remove("hidden")
        setTimeout(clearGameBoard, 2000)
    } 
    
}
function increaseDisplayWins() {
    if (currentGame.winner === currentGame.player1) {
        win1.innerText = currentGame.player1.wins
    } else if ( //just do innerHTML and interpolate in that
    currentGame.winner === currentGame.player2) {
        win2.innerText = currentGame.player2.wins
    }
}

function clearGameBoard() {
    tiles.forEach((tile) => {
        tile.innerHTML = ''})
        console.log(currentTurn)
        //    startDisplay.innerHTML = `It is <img src=${currentGame.turn.token} alt="This is an X" width="50" height="">'s turn`
        if (currentGame.winner === currentGame.player1) {
            console.log('string3')
            win1Display.classList.add("hidden")
            startDisplay.classList.remove('hidden')
        } else if (currentGame.winner === currentGame.player2) {
            console.log("string2")
            win2Display.classList.add("hidden")
            startDisplay.classList.remove("hidden")
        } else if (currentGame.draw === true) {
            console.log('string1')
        showDraw.classList.add("hidden")
        startDisplay.classList.remove('hidden')
        }
        currentGame.resetGameBoard()
    }

