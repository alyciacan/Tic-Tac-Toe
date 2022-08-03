//GLOBAL VARIABLES:
var currGame = new Game();
// var allSpots = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var winningCombos = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'],
  ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']];



//QUERY SELECTORS:
var gridSpots = document.querySelectorAll('.cell');
var winnerMsg = document.getElementById('winner-winner');
var tieMsg = document.getElementById('tie');
var yourTurn = document.getElementById('your-turn');
var nextPlayer = document.getElementById('gameboard__turn-indicator')
var player1Score = document.getElementById('player1-section__wins');
var player2Score = document.getElementById('player2-section__wins');


//EVENT LISTENERS:
for (var i = 0; i < gridSpots.length; i++) {
  gridSpots[i].addEventListener('click', goHere)
}



//EVENT HANDLERS:

function goHere() {
  var spot = event.target.closest('.cell');
  var id = spot.id;
  if (!spot.children.length) {
    var marker = document.createElement('img');
    marker.classList.add("large");
    currGame.makeAPlay(id, marker, spot);
    currGame.checkForWin();
    currGame.turnChange();
  }
}

function heyYouWon(someone) {
  var winner = someone.playerNum;
  yourTurn.classList.add('hidden');
  winnerMsg.classList.remove('hidden');
  currGame[winner].increaseWins();
  var delay = 1000
  setTimeout(startOver, delay);
}

function startOver(){
  var allMarkers = document.querySelectorAll('.large');
  for (var i = 0; i < allMarkers.length; i++) {
    allMarkers[i].remove();
  }
  winnerMsg.classList.add('hidden');
  yourTurn.classList.remove('hidden');
}

function updateScoreBoard(score, winner) {
  if (winner === 'player1') {
    player1Score.innerText = score;
  } else {
    player2Score.innerText = score;
  }
}

function updateWhoseTurn(nextPlayerToken) {
  nextPlayer.setAttribute('src', nextPlayerToken)
}
