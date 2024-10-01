let playField = document.getElementById("playField");

let enemiesArray = []
let proyectile
let basicEnemy
let repeatEnemy
let movePrompt
let moveClearInter
let playerCharacter

function startGame() {
  playerCharacter = new Player();
  playerCharacter.insert();

  repeatEnemy = setInterval(function () {
    basicEnemy = new Enemy()
    basicEnemy.insert()
    enemiesArray.push(basicEnemy)
  }, 1000)

  movePrompt = window.addEventListener("keydown", function (event) {

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
        shootingCannon();
        break;
    }
  });

  moveClearInter = window.addEventListener("keyup", function (event) {
    playerCharacter.directionY = 0;
  })

  movePlayerInterval = setInterval(function () {
    playerCharacter.movement()
  }, 100);

  function shootingCannon() {
    proyectile = new Proyectile();
    proyectile.insert();
    proyectile.shooting();
  }
}




//GameOverScreen
let startScreen = document.getElementById("startScreen");
let startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
  startGame();
  playField.style.display = "block";
  startScreen.style.display = "none";
})

let gameOverScreen = document.getElementById("gameOverScreen");
let gameOverButton = document.getElementById("gameOverButton");

gameOverButton.addEventListener("click", function(){
  startScreen.style.display = "block";
  gameOverScreen.style.display = "none";
})