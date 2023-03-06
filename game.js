class Game {
  constructor() {
    this.player1 = new Player(
      "Ramona",
      "https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
    );
    this.player2 = new Player(
      "Scott",
      "https://ih1.redbubble.net/image.175180605.1876/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
    );
    this.turn = this.player1;
    this.draw = false;
    this.winner = null;
    this.turnsTaken1 = [];
    this.turnsTaken2 = [];
    this.gameOver = false;
    this.currentBoard = [];
    this.winnerCombos = [
      { combo: [1, 2, 3] },
      { combo: [4, 5, 6] },
      { combo: [7, 8, 9] },
      { combo: [1, 4, 7] },
      { combo: [2, 5, 8] },
      { combo: [3, 6, 9] },
      { combo: [1, 5, 9] },
      { combo: [3, 5, 7] },
    ];
  }
  takeTurn() {
    if (this.gameOver) {
      return;
    }
    if (this.turn === this.player1) {
      this.turn = this.player2;
    } else if (this.turn === this.player2) {
      this.turn = this.player1;
    }
  }
  checkWin() {
    for (var i = 0; i < this.winnerCombos.length; i++) {
      const combo = this.winnerCombos[i].combo;

      const win1 = this.currentBoard[combo[0] - 1];

      const win2 = this.currentBoard[combo[1] - 1];
      const win3 = this.currentBoard[combo[2] - 1];
      if (win1 != null && win1 === win2 && win1 === win3) {
        this.winner = this.turn;
        this.gameOver = true;
        this.winner.increaseWins();
        setTimeout(this.resetGameBoard, 2000);
        return this.winner;
      } else if (
        this.turnsTaken1.length === 5 ||
        (this.turnsTaken2.length === 5 && this.winner === null)
      ) {
        this.gameOver = true;
        this.draw = true;
        this.winner = null;
        setTimeout(this.resetGameBoard, 2000);
      }
    }
  }
  resetGameBoard() {
    if (this.winner === this.player1) {
      this.turn = this.player2;
    } else if (this.winner === this.player2) {
      this.turn = this.player1;
    } else if (this.draw === true) {
      this.turn = this.player2;
    }
    this.draw = false;
    this.winner = null;
    this.gameOver = false;
    this.currentBoard = [];
    this.turnsTaken1 = [];
    this.turnsTaken2 = [];
  }
}
