console.log("Script load!!");

let playField = document.getElementById("playField");

let playerCharacter = new Player(90, 265);
playerCharacter.insert();

let basicEnemy = new Enemy(984, 265);
basicEnemy.insert()

setInterval(function(){
    basicEnemy.directionX = -1
    basicEnemy.movement()
}, 100)


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
  }
});
