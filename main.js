let playField = document.getElementById("playField");

let enemiesArray = []
let proyectile
let basicEnemy
let repeatEnemy
let movePrompt
let moveClearInter
let playerCharacter = new Player();

function startGame() {
  playerCharacter.speed = 10;
  playerCharacter.ejeX = 90;
  playerCharacter.ejeY = 265;
  playerCharacter.lives = 3;     
  playerCharacter.insert();

  repeatEnemy = setInterval(function () {
    basicEnemy = new Enemy()
    basicEnemy.insert()
    enemiesArray.push(basicEnemy)
  }, 1000)

  movePrompt = window.addEventListener("keydown", controls);

  moveClearInter = window.addEventListener("keyup", function (event) {
    playerCharacter.directionY = 0;
  })

  movePlayerInterval = setInterval(function () {
    playerCharacter.movement()
  }, 100);
}

function shootingCannon() {
  console.log(this)
  proyectile = new Proyectile();
  proyectile.insert();
  proyectile.shooting();
}

function controls(event) {
  switch (event.key.toLowerCase()) {
    case "w":
      playerCharacter.directionY = -1;
      playerCharacter.movement();
      break;
    case "s":
      playerCharacter.directionY = 1;
      playerCharacter.movement();
      break;
    case " ":
      console.log("vaya vaya")
      shootingCannon();
      proyectile.shootingSpeed = 30;   
      break;
  }
}

function gameOver() {
  window.removeEventListener("keydown", controls);
  
  enemiesArray = [];
  
  playField.style.display = "none";
  gameOverScreen.style.display = "block";
}

//GameOverScreen
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

