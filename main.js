//GLOBAL VARIABLES:
var currGame = new Game();
var delay = 1150;
let scoresToStore = {player1: 0, player2: 0}
let parsedScores;

//QUERY SELECTORS:
var gridSpots = document.querySelectorAll('.cell');
var nextPlayer = document.getElementById('gameboard__turn-indicator')
var player1Score = document.getElementById('player1-section__wins');
var player2Score = document.getElementById('player2-section__wins');
var tieMsg = document.getElementById('tie');
var winnerImg = document.getElementById('gameboard___winner-img');
var winnerMsg = document.getElementById('winner-winner');
var yourTurn = document.getElementById('your-turn');
var resetBtn = document.getElementById('reset-scores');

//EVENT LISTENERS:
gridSpots.forEach(element => element.addEventListener('click', placeMarker));
window.addEventListener('load', getScores);
resetBtn.addEventListener('click', resetScores);

//FUNCTIONS:
//add a Fn to check scores and render from localStorage
function resetScores() {
  localStorage.clear();
  scoresToStore = { player1: 0, player2: 0 }
  renderExistingScores(scoresToStore);
};

function getScores() {
  const scores = localStorage.getItem('ScoreObj');
  const data = scores ? JSON.parse(scores) : scoresToStore;
  renderExistingScores(data);
  scoresToStore = data;
}

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

function renderExistingScores(data) {
  console.log('hi');
  player1Score.innerText = data.player1;
  player2Score.innerText = data.player2;
};

function updateScoreBoard() {
    player1Score.innerText = scoresToStore.player1;
    player2Score.innerText = scoresToStore.player2;
};

function updateScoresLocally(player) {
  scoresToStore[player] += 1;
  const stringifiedScore = JSON.stringify(scoresToStore);
  localStorage.setItem('ScoreObj', stringifiedScore);
  const retrievedScores = localStorage.getItem('ScoreObj');
  console.log(JSON.parse(retrievedScores));
  return JSON.parse(retrievedScores);
};

function makeHidden(element) {
  element.classList.add('hidden');
};

function unHide(element) {
  element.classList.remove('hidden');
};
