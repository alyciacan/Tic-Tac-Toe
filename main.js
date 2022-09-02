//GLOBAL VARIABLES:
var currGame = new Game();
var delay = 1150;

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
gridSpots.forEach(element => element.addEventListener('click', placeMarker));


//FUNCTIONS:
function placeMarker() {
  var spot = event.target.closest('.cell');
  var id = spot.id;

  if (!spot.children.length) {
    var marker = document.createElement('img');
    marker.classList.add('large');
    currGame.makeAPlay(id, marker, spot);
  }
};

function declareWinner(player) {
  var winner = player.playerNum;
  makeHidden(yourTurn);
  updateWinner(player.token, player.altText);
  unHide(winnerMsg);
  currGame[winner].increaseWins();
  setTimeout(startOver, delay);
};

function updateWinner(winnerToken, altText) {
  winnerImg.setAttribute('src', winnerToken);
  winnerImg.setAttribute('alt', altText);
};

function declareATie() {
  makeHidden(yourTurn);
  unHide(tieMsg);
  setTimeout(startOver, delay);
};

function startOver(){
  var allMarkers = document.querySelectorAll('.large');
  allMarkers.forEach(marker => marker.remove());

  displayWhoGoesFirst();
  makeHidden(winnerMsg);
  makeHidden(tieMsg);
  unHide(yourTurn);
};

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
};

function updateWhoseTurn(nextPlayerToken, altText) {
  nextPlayer.setAttribute('src', nextPlayerToken);
  nextPlayer.setAttribute('alt', altText);
};

function updateScoreBoard(score, winner) {
  if (winner === 'player1') {
    player1Score.innerText = score;
  } else {
    player2Score.innerText = score;
  }
};

function makeHidden(element) {
  element.classList.add('hidden');
};

function unHide(element) {
  element.classList.remove('hidden');
};
