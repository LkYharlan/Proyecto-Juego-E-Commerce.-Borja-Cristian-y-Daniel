let playField = document.getElementById("playField");

let enemiesArray = []
let proyectile
let basicEnemy
let repeatEnemy
let repeatMeteorite
let movePrompt
let moveClearInter
let playerCharacter = new Player();

let gameOverSong = new Audio("./assets/gameover_song.mp3")
let gameplaySong = new Audio("./assets/gameplay_song.mp3")
let proyectileSound = new Audio("./assets/laser_player.mp3")
let playerExplotionSound = new Audio("./assets/player_explotion.mp3")
let enemyExplotionSound = new Audio("./assets/enemy_explotion.mp3")

function startGame() {
  gameOverSong.pause()
  gameOverSong.currentTime = 0
  playerCharacter.explotion.style.display = "none";
  gameplaySong.play()
  gameplaySong.loop = true
  gameplaySong.volume = 0.3

  playerCharacter.ejeX = 90;
  playerCharacter.ejeY = 265;
  playerCharacter.lives = 3;
  playerCharacter.insert();

  repeatEnemy = setInterval(function () {
    basicEnemy = new Enemy()
    basicEnemy.insert()
    enemiesArray.push(basicEnemy)
  }, 1000)


  repeatMeteorite = setInterval(function () {
    let meteorite = new Meteorite();
    meteorite.insert();
  }, 6000)

  movePrompt = window.addEventListener("keydown", controls);

  moveClearInter = window.addEventListener("keyup", function (event) {
    playerCharacter.directionY = 0;
    playerCharacter.directionX = 0
  })

  movePlayerInterval = setInterval(function () {
    playerCharacter.movement()
  }, 30);
}

//Shooting function
function shootingCannon() {
  proyectile = new Proyectile();
  proyectile.insert();
  proyectile.shooting();
  proyectileSound.currentTime = 0;
  proyectileSound.play();
}

//Controls
function controls(event) {
  if (playerCharacter.lives > 0) {
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
        shootingCannon();
        proyectile.shootingSpeed = 30;
        break;
    }
  }
}
//Game over function
function gameOver() {
  window.removeEventListener("keydown", controls);
  let explotionAnimation = document.querySelectorAll(".enemyExplotion");
  for (let i = 0; i < explotionAnimation.length; i++) {
    playField.removeChild(explotionAnimation[i])
  }
  enemiesArray = [];
  playField.style.display = "none";
  gameOverScreen.style.display = "block";
}

//Game over screen
let startScreen = document.getElementById("startScreen");
let startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
  startGame();
  playField.style.display = "block";
  startScreen.style.display = "none";
});

let gameOverScreen = document.getElementById("gameOverScreen");
let gameOverButton = document.getElementById("gameOverButton");

gameOverButton.addEventListener("click", function () {
  startScreen.style.display = "block";
  gameOverScreen.style.display = "none";
});

