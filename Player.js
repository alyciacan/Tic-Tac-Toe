class Player {
  constructor(id){
    this.id = id;
    this.token = `assets/${id}.svg`;
    this.wins = 0;
    this.spots = [];
  }

  increaseWins() {
    this.wins += 1;
  }
}
