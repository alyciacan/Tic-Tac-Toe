class Player {
  constructor(id, playerNum) {
    this.id = id;
    this.playerNum = playerNum;
    this.token = `assets/${id}.svg`;
    this.wins = 0;
    this.spots = [];
  }

  increaseWins() {
    this.wins += 1;
    var score = this.wins;
    var winner = this.playerNum;
    updateScoreBoard(score, winner);
  }
}
