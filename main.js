let playField = document.getElementById("playField");

let enemiesArray = []

let playerCharacter = new Player();
playerCharacter.insert();

let proyectile

let basicEnemy

 let repeatEnemy = setInterval(function(){
    basicEnemy = new Enemy ()
    basicEnemy.insert()
    enemiesArray.push(basicEnemy)
}, 1000)


let movePrompt = window.addEventListener("keydown", function (event) {

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

let moveClearInter = window.addEventListener( "keyup", function(event){
    playerCharacter.directionY = 0;
})

movePlayerInterval = setInterval( function () {
    playerCharacter.movement()
}, 100);


function shootingCannon (){
  proyectile = new Proyectile();
  proyectile.insert();
  proyectile.shooting();
}