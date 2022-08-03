//GLOBAL VARIABLES:
var currGame = new Game();
var allSpots = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var winningCombos = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'],
  ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']];



//QUERY SELECTORS:
var gridSpots = document.querySelectorAll('.cell');
var winnerMsg = document.getElementById('winner-winner');
var tieMsg = document.getElementById('tie');
var yourTurn = document.getElementById('your-turn');


//EVENT LISTENERS:
// window.addEventListener('load', newGame)
for (var i = 0; i < gridSpots.length; i++) {
  gridSpots[i].addEventListener('click', goHere)
}



//EVENT HANDLERS:

function goHere() {
  //check to see if this spot is already in player's array
  var spot = event.target.closest('.cell');
  var id = spot.id;
  var marker = document.createElement('img');
  marker.classList.add("large");
  currGame.makeAPlay(id, marker, spot);
  currGame.checkForWin();
  currGame.turnChange();
}

function heyYouWon(someone) {
  var winner = someone.playerNum;
  yourTurn.classList.add('hidden');
  winnerMsg.classList.remove('hidden');
  currGame[winner].increaseWins();
  // startOver();
}
