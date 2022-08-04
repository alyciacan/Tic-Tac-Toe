//GLOBAL VARIABLES:
var currGame = new Game();
var winningCombos = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'],
['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'],
['3', '5', '7']];
var delay = 1000;

//QUERY SELECTORS:
var gridSpots = document.querySelectorAll('.cell');
var nextPlayer = document.getElementById('gameboard__turn-indicator')
var player1Score = document.getElementById('player1-section__wins');
var player2Score = document.getElementById('player2-section__wins');
var tieMsg = document.getElementById('tie');
var winnerImg = document.getElementById('gameboard___winner-img');
var winnerMsg = document.getElementById('winner-winner');
var yourTurn = document.getElementById('your-turn');

//EVENT LISTENERS:
for (var i = 0; i < gridSpots.length; i++) {
  gridSpots[i].addEventListener('click', placeMarker)
}

//EVENT HANDLERS:
function placeMarker() {
  var spot = event.target.closest('.cell');
  var id = spot.id;

  if (!spot.children.length) {
    var marker = document.createElement('img');
    marker.classList.add('large');
    currGame.makeAPlay(id, marker, spot);
  }
}

function heyYouWon(someone) {
  var winner = someone.playerNum;
  yourTurn.classList.add('hidden');
  updateWinner(someone.token);
  winnerMsg.classList.remove('hidden');
  currGame[winner].increaseWins();
  setTimeout(startOver, delay);
}

function updateWinner(winnerToken) {
  winnerImg.setAttribute('src', winnerToken;
}

function itsATie() {
  yourTurn.classList.add('hidden');
  tieMsg.classList.remove('hidden');
  setTimeout(startOver, delay);
}

function startOver(){
  var allMarkers = document.querySelectorAll('.large');
  for (var i = 0; i < allMarkers.length; i++) {
    allMarkers[i].remove();
  }

  displayWhoGoesFirst();
  winnerMsg.classList.add('hidden');
  tieMsg.classList.add('hidden');
  yourTurn.classList.remove('hidden');
}

function displayWhoGoesFirst() {
  if (currGame.goesFirst === 'player2') {
    currGame.goesFirst = 'player1';
    currGame.turn = 'player1';
    updateWhoseTurn(currGame.player1.token);
  } else {
    currGame.goesFirst = 'player2';
    currGame.turn = 'player2';
    updateWhoseTurn(currGame.player2.token);
  }
}

function updateWhoseTurn(nextPlayerToken) {
  nextPlayer.setAttribute('src', nextPlayerToken);
}

function updateScoreBoard(score, winner) {
  if (winner === 'player1') {
    player1Score.innerText = score;
  } else {
    player2Score.innerText = score;
  }
}
