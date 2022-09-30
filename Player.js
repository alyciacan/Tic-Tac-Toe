class Player {
  constructor(id, playerNum) {
    this.id = id;
    this.playerNum = playerNum;
    this.token = `assets/${id}.svg`;
    this.wins = 0;
    this.spots = [];
    this.altText = `${id} cartoon`
  }

  increaseWins() {
    this.wins += 1;
    var score = this.wins;
    var winner = this.playerNum;
    updateScoreBoard(updateScoresLocally(this.playerNum));
  };
};
