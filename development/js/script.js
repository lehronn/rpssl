// scripts.js
var newGameBtn = document.getElementById( 'js-newGameButton' );
newGameBtn.addEventListener( 'click', newGame );

var pickRock = document.getElementById( 'js-playerPick_rock' ),
    pickPaper = document.getElementById( 'js-playerPick_paper' ),
    pickScissors = document.getElementById( 'js-playerPick_scissors' ),
    pickSpock = document.getElementById( 'js-playerPick_spock' ),
    pickLizard = document.getElementById( 'js-playerPick_lizard' );

pickRock.addEventListener( 'click', function() { playerPick ('rock'); } );
pickPaper.addEventListener( 'click', function() { playerPick ('paper'); } );
pickScissors.addEventListener( 'click', function() { playerPick ('scissors'); } );
pickSpock.addEventListener( 'click', function() { playerPick ('spock'); } );
pickLizard.addEventListener( 'click', function() { playerPick ('lizard'); } );

var gameState = 'notStarted', //started // ended
    player = {
      name: '',
      score: 0
    },
    computer = {
      score: 0
    };

var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');

function setGameElements() {
  switch( gameState ) {
    case 'started':
      newGameElem.style.display = 'none';
      pickElem.style.display = 'block';
      resultsElem.style.display = 'block';
      break;
    case 'ended':
      resultsElem.style.display = 'block';
      newGameBtn.innerText = 'Maybe once again, young cadet?';
      /* falls through */
    case 'notStarted':
      /* falls through */
    default:
      newGameElem.style.display = 'block';
      pickElem.style.display = 'none';
      resultsElem.style.display = 'none';
  }
}

setGameElements();

var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
  player.name = prompt( 'Please enter your name', 'Player name...' );
    if ( player.name ) {
      player.score = computer.score = 0;
      gameState = 'started';
      setGameElements();

      playerNameElem.innerHTML = player.name;
      setGamePoints();
    }

}

function playerPick( playerPick ) {
  console.log( playerPick );
}

function getComputerPick() {
  var possiblePicks = [ 'rock', 'paper', 'scissors', 'spock', 'lizard' ];
  return possiblePicks[ Math.floor( Math.random() *5 ) ];
}

var playerPickElem = document.getElementById( 'js-playerPick' ),
    computerPickElem = document.getElementById( 'js-computerPick' ),
    playerResultElem = document.getElementById( 'js-playerResult' ),
    computerResultElem = document.getElementById( 'js-computerResult' ),
    versusPlace = document.getElementById( 'js-versus' );

function playerPick( playerPick ) {
  var computerPick = getComputerPick();

  playerPickElem.innerHTML = playerPick;
  computerPickElem.innerHTML = computerPick;

  checkRoundWinner( playerPick, computerPick );
}
function checkRoundWinner ( playerPick, computerPick ) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if ( playerPick == computerPick ) {
      winnerIs = 'noone'; //draft
      setGamePoints();
    } else if (
      ( computerPick == 'rock' && playerPick == 'scissors' ) ||
      ( computerPick == 'paper' && playerPick == 'rock' ) ||
      ( computerPick == 'scissors' && playerPick == 'paper' ) ||
      ( computerPick == 'rock' && playerPick == 'lizard' ) ||
      ( computerPick == 'lizard' && playerPick == 'spock' ) ||
      ( computerPick == 'scissors' && playerPick == 'lizard ') ||
      ( computerPick == 'lizard' && playerPick == 'paper' ) ||
      ( computerPick == 'paper' && playerPick == 'spock' ) ||
      ( computerPick == 'spock' && playerPick == 'rock' ) ||
      ( computerPick == 'spock' && playerPick == 'scissors' ) ) {

        winnerIs = 'computer';
        setGamePoints();
      }

      if ( winnerIs == 'player' ) {
        playerResultElem.innerHTML = 'Win!';
        player.score++;
        setGamePoints();
        showGameWinner();
      } else if ( winnerIs == 'computer' ) {
          computerResultElem.innerHTML = 'Win!';
          computer.score++;
          setGamePoints();
          showGameWinner();
      }

}

function setGamePoints() {
  playerPointsElem.innerHTML = player.score;
  computerPointsElem.innerHTML = computer.score; //playerPointsElem error
}

setGamePoints();

function showGameWinner() {
  if (player.score == 10) {
    gameState = 'ended';
    setGameElements();
    versusPlace.innerHTML = 'Player is Winner!';
  } else if (computer.score == 10) {
    gameState = 'ended';
    setGameElements();
    versusPlace.innerHTML = 'Computer is Winner!';
  }
}
