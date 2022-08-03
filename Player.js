class Player {
  constructor(id, playerNum){
    this.id = id;
    this.playerNum = playerNum;
    this.token = `assets/${id}.svg`;
    this.wins = 0;
    this.spots = [];
  }

  increaseWins() {
    this.wins += 1;
  }
}
