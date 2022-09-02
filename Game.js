class Game {
  constructor() {
    this.player1 = new Player('rocket', 'player1');
    this.player2 = new Player('ufo', 'player2');
    this.turn = 'player1';
    this.winningCombos = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'],
      ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'],
      ['3', '5', '7']];
    this.tie = false;
    this.goesFirst = 'player1';
  };

  makeAPlay(id, marker, spot) {
    if (this.turn === 'player1') {
      this.player1.spots.push(id);
      marker.src = 'assets/rocket.svg';
      spot.appendChild(marker);
    } else if (this.turn === 'player2') {
      this.player2.spots.push(id);
      marker.src = 'assets/ufo.svg';
      spot.appendChild(marker);
    };

    this.checkForWin();
    this.turnChange();
  };

  checkForWin() {
    if (this.turn === 'player1') {
      var currPlayer = this.player1;
    } else {
      var currPlayer = this.player2;
    };

    for (var i = 0; i < this.winningCombos.length; i++) {
      if (currPlayer.spots.includes(this.winningCombos[i][0])
      && currPlayer.spots.includes(this.winningCombos[i][1])
      && currPlayer.spots.includes(this.winningCombos[i][2])) {
      declareWinner(currPlayer);
      this.resetSpots();
      }
    };

    if (this.player1.spots.length === 5 || this.player2.spots.length === 5) {
      this.resetSpots();
      declareATie();
    }
  };

  turnChange() {
    if (this.turn === 'player1') {
      this.turn = 'player2';
      updateWhoseTurn(this.player2.token, 'ufo cartoon');
    } else {
      this.turn = 'player1';
      updateWhoseTurn(this.player1.token, 'rocket cartoon');
    }
  };

  resetSpots() {
    this.player1.spots = [];
    this.player2.spots = [];
  };
};
