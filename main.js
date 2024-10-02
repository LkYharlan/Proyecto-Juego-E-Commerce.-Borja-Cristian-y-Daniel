let playField = document.getElementById("playField");
let scoreDiv = document.getElementById("score");
let finalScoreDiv = document.getElementById("finalScore");
let playerLifes = document.getElementById("lifes");

let enemiesArray = [];
let proyectile;
let basicEnemy;
let repeatEnemy;
let repeatMeteorite;
let movePrompt;
let moveClearInter;
let playerCharacter = new Player();

scoreDiv.innerText = `Score: ${Player.score}`;

let gameOverSong = new Audio("./assets/gameover_song.mp3");
let gameplaySong = new Audio("./assets/gameplay_song.mp3");
let proyectileSound = new Audio("./assets/laser_player.mp3");
let playerExplotionSound = new Audio("./assets/player_explotion.mp3");
let enemyExplotionSound = new Audio("./assets/enemy_explotion.mp3");

function startGame() {
  gameOverSong.pause();
  gameOverSong.currentTime = 0;
  playerCharacter.explotion.style.display = "none";
  gameplaySong.play();
  gameplaySong.loop = true;
  gameplaySong.volume = 0.3;

  Player.score = 0;
  scoreDiv.innerText = `Score: ${Player.score}`;

  playerCharacter.ejeX = 90;
  playerCharacter.ejeY = 265;
  playerCharacter.lifes = 3;
  playerLifes.style.paddingRight = 270 + "px";
  playerLifes.style.width = 30 + "px";
  playerCharacter.insert();
  
  
  repeatEnemy = setInterval(function () {
    basicEnemy = new Enemy();
    basicEnemy.insert();
    enemiesArray.push(basicEnemy);
  }, 1000);
  
  
  repeatMeteorite = setInterval(function () {
    let meteorite = new Meteorite;
    meteorite.insert();
  }, 6000);
  
  movePrompt = window.addEventListener("keydown", controls);
  
  moveClearInter = window.addEventListener("keyup", function (event) {
    playerCharacter.directionY = 0;
    playerCharacter.directionX = 0;
  });
  
  movePlayerInterval = setInterval(function () {
    playerCharacter.movement();
  }, 30);
}

//Shooting function
function shootingCannon() {
  proyectile = new Proyectile;
  proyectile.insert();
  proyectile.shooting();
  proyectileSound.currentTime = 0;
  proyectileSound.play();
  
}

//Controls
function controls(event) {
  if (playerCharacter.lifes > 0) {
    switch (event.key.toLowerCase()) {
      case "w":
        playerCharacter.directionY = -1;
        playerCharacter.movement();
        break;
      case "s":
        playerCharacter.directionY = 1;
        playerCharacter.movement();
        break;
      case "a":
        playerCharacter.directionX = -1;
        playerCharacter.movement();
        break;
      case "d":
        playerCharacter.directionX = 1;
        playerCharacter.movement();
        break;
      case " ":
        if(Proyectile.bulletCounter < 5){
        shootingCannon();
        proyectile.shootingSpeed = 30;
        break;
        }
    }
  }
}


function checkLifes(){
  if (playerCharacter.lifes == 0) {
    playerLifes.style.paddingRight = 0 + "px";
    playerLifes.style.width = 0 + "px";
  }
  if (playerCharacter.lifes == 1) {
    playerLifes.style.paddingRight = 70 + "px";
  }
  if (playerCharacter.lifes == 2) {
    playerLifes.style.paddingRight = 170 + "px";
  }
  if (playerCharacter.lifes == 3) {
    playerLifes.style.paddingRight = 270 + "px";
  }
  if (playerCharacter.lifes == 4) {
    playerLifes.style.paddingRight = 370 + "px";
  }
  if (playerCharacter.lifes == 5) {
    playerLifes.style.paddingRight = 470 + "px";
  }
}

//Pantalla final

function gameOver() {
  window.removeEventListener("keydown", controls);
  let explotionAnimation = document.querySelectorAll(".enemyExplotion");
  for (let i = 0; i < explotionAnimation.length; i++) {
    playField.removeChild(explotionAnimation[i]);
  }
  enemiesArray = [];
  playField.style.display = "none";
  gameOverScreen.style.display = "block";
}


//Buttons

let startScreen = document.getElementById("startScreen");
let startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
  setTimeout(function() {
  startGame();
  playField.style.display = "block";
  startScreen.style.display = "none";
}, 300);
});

let gameOverScreen = document.getElementById("gameOverScreen");
let gameOverButton = document.getElementById("gameOverButton");

gameOverButton.addEventListener("click", function () {
  setTimeout(function () {
    startScreen.style.display = "block";
    gameOverScreen.style.display = "none";
  }, 300);
});

