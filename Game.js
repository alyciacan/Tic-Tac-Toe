class Game {
  constructor() {
    this.player1 = new Player('rocket');
    this.player2 = new Player('ufo');
    this.turn = 'player1';
    this.tie = false;
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
  }

  checkForWin() {
    if (this.turn === 'player1') {
      var currPlayer = this.player1;
    } else {
      var currPlayer = this.player2;
    }
    console.log(currPlayer.spots)
    for (var i = 0; i < winningCombos.length; i++) {
      if (currPlayer.spots.includes(winningCombos[i][0])
      && currPlayer.spots.includes(winningCombos[i][1])
      && currPlayer.spots.includes(winningCombos[i][2])) {
      this.heyYouWon();
      }
    }
  }

  turnChange() {
    if (this.turn === 'player1') {
      this.turn = 'player2';
    } else {
      this.turn = 'player1';
    }
  }

  heyYouWon() {
    
  }
}
