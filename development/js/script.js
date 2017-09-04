// scripts.js
var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

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
  switch(gameState) {
    case 'started':
      newGameElem.style.display = 'none';
      pickElem.style.display = 'block';
      resultsElem.style.display = 'block';
      break;
    case 'ended':
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
      player.name = prompt('Please enter your name', 'Player name...');
      if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();

        playerNameElem.innerHTML = player.name;
        // setGamePoints(); // This function has not been created yet
      }

    }

    function playerPick(playerPick) {
        console.log(playerPick);
    }

    function getComputerPick() {
      var possiblePicks = [ 'rock', 'paper', 'scissors', 'spock', 'lizard' ];
      return possiblePicks[ Math.floor( Math.random() *5 ) ];
    }

    var playerPickElem = document.getElementById('js-playerPick'),
        computerPickElem = document.getElementById('js-computerPick'),
        playerResultElem = document.getElementById('js-playerResult'),
        computerResultElem = document.getElementById('js-computerResult');

        function playerPick(playerPick) {
          var computerPick = getComputerPick();

          playerPickElem.innerHTML = playerPick;
          computerPickElem.innerHTML = computerPick;
        }
