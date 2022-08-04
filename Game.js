class Game {
  constructor() {
    this.player1 = new Player('rocket', 'player1');
    this.player2 = new Player('ufo', 'player2');
    this.turn = 'player1';
    this.tie = false;
    this.goesFirst = 'player1';
  }

  makeAPlay(id, marker, spot) {
    if (this.turn === 'player1' && !this.player1.spots.includes(id)) {
      this.player1.spots.push(id);
      marker.src = 'assets/rocket.svg';
      spot.appendChild(marker);
    } else if (this.turn === 'player2' && !this.player2.spots.includes(id)) {
      this.player2.spots.push(id);
      marker.src = 'assets/ufo.svg';
      spot.appendChild(marker);
    }
    this.checkForWin();
    this.turnChange();
  }

  checkForWin() {
    if (this.turn === 'player1') {
      var currPlayer = this.player1;
    } else {
      var currPlayer = this.player2;
    }

    for (var i = 0; i < winningCombos.length; i++) {
      if (currPlayer.spots.includes(winningCombos[i][0])
      && currPlayer.spots.includes(winningCombos[i][1])
      && currPlayer.spots.includes(winningCombos[i][2])) {
      heyYouWon(currPlayer);
      this.resetSpots();
      }
    }

    if (this.player1.spots.length === 5 || this.player2.spots.length === 5) {
      this.resetSpots();
      itsATie();
    }
  }

  turnChange() {
    if (this.turn === 'player1') {
      this.turn = 'player2';
      updateWhoseTurn(this.player2.token);
    } else {
      this.turn = 'player1';
      updateWhoseTurn(this.player1.token);
    }
  }

  resetSpots() {
    this.player1.spots = [];
    this.player2.spots = [];
  }

}
